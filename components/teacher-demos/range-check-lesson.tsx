"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function RangeCheckLesson() {
  const [activeTab, setActiveTab] = useState("demo")

  // 范围猜测游戏状态
  const [gameDataType, setGameDataType] = useState("age")
  const [guessValue, setGuessValue] = useState("")
  const [guessResult, setGuessResult] = useState<null | { valid: boolean; message: string }>(null)
  const [attempts, setAttempts] = useState(0)
  const [correctAttempts, setCorrectAttempts] = useState(0)

  // 挑战问题状态
  const [challengeAnswer1, setChallengeAnswer1] = useState("")
  const [challengeAnswer2, setChallengeAnswer2] = useState("")
  const [showAnswer1, setShowAnswer1] = useState(false)
  const [showAnswer2, setShowAnswer2] = useState(false)

  // 数据类型范围定义
  const dataRanges = {
    age: { min: 5, max: 18, name: "学生年龄", unit: "岁" },
    temperature: { min: 35, max: 42, name: "人体温度", unit: "°C" },
    month: { min: 1, max: 12, name: "月份", unit: "" },
    percentage: { min: 0, max: 100, name: "百分比", unit: "%" },
  }

  // 检查猜测值是否在范围内
  const checkGuess = () => {
    const numValue = Number(guessValue)

    if (isNaN(numValue)) {
      setGuessResult({ valid: false, message: "请输入一个有效的数字" })
      return
    }

    const range = dataRanges[gameDataType as keyof typeof dataRanges]
    const isValid = numValue >= range.min && numValue <= range.max

    setAttempts(attempts + 1)
    if (isValid) {
      setCorrectAttempts(correctAttempts + 1)
    }

    setGuessResult({
      valid: isValid,
      message: isValid
        ? `✓ 正确！${numValue}${range.unit} 在 ${range.name}的合理范围内。`
        : `✗ 错误！${numValue}${range.unit} 不在 ${range.name}的合理范围内。`,
    })
  }

  return (
    <div className="space-y-8">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="teacher">教师演示区域</TabsTrigger>
          <TabsTrigger value="demo">实际例子</TabsTrigger>
          <TabsTrigger value="challenge">挑战问题</TabsTrigger>
        </TabsList>

        <TabsContent value="teacher" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>实时演示: "范围猜测游戏"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">材料:</h3>
                <p>准备一些常见数据类型的合理范围卡片</p>

                <h3 className="font-medium mt-4 mb-2">演示步骤:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>展示一种数据类型（如年龄、温度、考试分数）</li>
                  <li>学生猜测该数据类型的合理范围</li>
                  <li>记录最低和最高猜测值</li>
                  <li>讨论为什么某些值不合理（如年龄为-5或200）</li>
                  <li>揭示实际使用的合理范围</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">教学提示:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>鼓励学生思考不同数据类型的自然限制</li>
                  <li>讨论为什么范围检查对数据验证很重要</li>
                  <li>展示范围检查如何防止系统错误和数据损坏</li>
                  <li>提供现实世界中范围检查失败的例子</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">互动活动:</h3>
                <p className="mb-2">让学生尝试"范围猜测游戏":</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">选择数据类型:</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Button
                        variant={gameDataType === "age" ? "default" : "outline"}
                        onClick={() => setGameDataType("age")}
                        className="text-sm"
                      >
                        学生年龄
                      </Button>
                      <Button
                        variant={gameDataType === "temperature" ? "default" : "outline"}
                        onClick={() => setGameDataType("temperature")}
                        className="text-sm"
                      >
                        人体温度
                      </Button>
                      <Button
                        variant={gameDataType === "month" ? "default" : "outline"}
                        onClick={() => setGameDataType("month")}
                        className="text-sm"
                      >
                        月份
                      </Button>
                      <Button
                        variant={gameDataType === "percentage" ? "default" : "outline"}
                        onClick={() => setGameDataType("percentage")}
                        className="text-sm"
                      >
                        百分比
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-1">输入一个值，检查是否在合理范围内:</label>
                    <div className="flex space-x-2">
                      <Input
                        type="number"
                        value={guessValue}
                        onChange={(e) => setGuessValue(e.target.value)}
                        placeholder={`输入一个${dataRanges[gameDataType as keyof typeof dataRanges].name}`}
                        className="flex-1"
                      />
                      <Button onClick={checkGuess}>检查</Button>
                    </div>
                  </div>

                  {guessResult && (
                    <div className={`p-3 rounded-lg ${guessResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                      <div className="flex items-center">
                        {guessResult.valid ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <p className={guessResult.valid ? "text-green-700" : "text-red-700"}>{guessResult.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">正确率: </span>
                      <span className="font-bold">
                        {attempts > 0 ? Math.round((correctAttempts / attempts) * 100) : 0}%
                      </span>
                      <span className="text-gray-500">
                        ({correctAttempts}/{attempts})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>实际例子</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">人体温度</h3>
                  <p className="font-bold">合理范围: 35°C - 42°C</p>
                  <p className="text-sm text-gray-600 mt-1">(低于35°C可能是体温过低，高于42°C几乎不可能生存)</p>

                  <div className="mt-4">
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-red-400" style={{ width: "35%" }}></div>
                      <div className="absolute inset-y-0 left-35% bg-green-400" style={{ width: "7%" }}></div>
                      <div className="absolute inset-y-0 left-42% right-0 bg-red-400"></div>

                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "35%" }}></div>
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "42%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>30°C</span>
                      <span>35°C</span>
                      <span>42°C</span>
                      <span>45°C</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">学生年龄</h3>
                  <p className="font-bold">合理范围: 5 - 18岁</p>
                  <p className="text-sm text-gray-600 mt-1">(针对K-12学校系统)</p>

                  <div className="mt-4">
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-red-400" style={{ width: "5%" }}></div>
                      <div className="absolute inset-y-0 left-5% bg-green-400" style={{ width: "13%" }}></div>
                      <div className="absolute inset-y-0 left-18% right-0 bg-red-400"></div>

                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "5%" }}></div>
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "18%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0岁</span>
                      <span>5岁</span>
                      <span>18岁</span>
                      <span>25岁</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">月份</h3>
                  <p className="font-bold">合理范围: 1 - 12</p>
                  <p className="text-sm text-gray-600 mt-1">(日历系统)</p>

                  <div className="mt-4">
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-red-400" style={{ width: "5%" }}></div>
                      <div className="absolute inset-y-0 left-5% bg-green-400" style={{ width: "55%" }}></div>
                      <div className="absolute inset-y-0 left-60% right-0 bg-red-400"></div>

                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "5%" }}></div>
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "60%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0</span>
                      <span>1</span>
                      <span>12</span>
                      <span>20</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">百分比</h3>
                  <p className="font-bold">合理范围: 0 - 100%</p>
                  <p className="text-sm text-gray-600 mt-1">(在某些特殊情况下可能超过100%)</p>

                  <div className="mt-4">
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-red-400" style={{ width: "0%" }}></div>
                      <div className="absolute inset-y-0 left-0 bg-green-400" style={{ width: "100%" }}></div>
                      <div className="absolute inset-y-0 left-100% right-0 bg-red-400"></div>

                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "0%" }}></div>
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "100%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>-20%</span>
                      <span>0%</span>
                      <span>100%</span>
                      <span>120%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>范围检查的实际应用</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">表单验证</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>年龄输入 (0-120)</li>
                    <li>评分系统 (1-5星)</li>
                    <li>数量选择 (1-99)</li>
                    <li>日期选择 (有效日期范围)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">传感器数据</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>温度传感器 (-50°C 到 150°C)</li>
                    <li>湿度传感器 (0-100%)</li>
                    <li>压力传感器 (特定范围)</li>
                    <li>速度传感器 (0-最大值)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">系统安全</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>防止缓冲区溢出</li>
                    <li>限制API请求频率</li>
                    <li>防止资源过度使用</li>
                    <li>限制文件上传大小</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenge" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>挑战问题</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">问题1: 系统边界处理</h3>
                <p className="mb-4">"如果一个学生在系统中输入了150岁的年龄，会发生什么问题？"</p>

                <div className="space-y-2">
                  <textarea
                    value={challengeAnswer1}
                    onChange={(e) => setChallengeAnswer1(e.target.value)}
                    placeholder="在这里输入你的答案..."
                    className="w-full h-20 p-2 border border-gray-300 rounded-lg"
                  ></textarea>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setShowAnswer1(!showAnswer1)}>
                      {showAnswer1 ? "隐藏参考答案" : "查看参考答案"}
                    </Button>
                  </div>

                  {showAnswer1 && (
                    <div className="bg-blue-50 p-3 rounded-lg mt-2">
                      <h4 className="font-medium mb-1">参考答案:</h4>
                      <p>如果系统没有进行范围检查，可能会导致以下问题:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>数据不一致 - 系统存储了不合理的年龄数据</li>
                        <li>计算错误 - 基于年龄的计算(如平均年龄)会产生错误结果</li>
                        <li>业务逻辑错误 - 可能触发错误的业务规则或权限</li>
                        <li>用户体验差 - 显示不合理的数据会降低系统可信度</li>
                        <li>潜在安全风险 - 可能被用于尝试注入攻击</li>
                      </ul>
                      <p className="mt-2">
                        正确的做法是实施范围检查，拒绝接受超出合理范围(如5-18岁)的输入，并向用户提供明确的错误消息。
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">问题2: 业务规则与范围</h3>
                <p className="mb-4">"为什么ATM机不允许取款金额为负数？"</p>

                <div className="space-y-2">
                  <textarea
                    value={challengeAnswer2}
                    onChange={(e) => setChallengeAnswer2(e.target.value)}
                    placeholder="在这里输入你的答案..."
                    className="w-full h-20 p-2 border border-gray-300 rounded-lg"
                  ></textarea>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setShowAnswer2(!showAnswer2)}>
                      {showAnswer2 ? "隐藏参考答案" : "查看参考答案"}
                    </Button>
                  </div>

                  {showAnswer2 && (
                    <div className="bg-blue-50 p-3 rounded-lg mt-2">
                      <h4 className="font-medium mb-1">参考答案:</h4>
                      <p>ATM机不允许取款金额为负数的原因:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>业务逻辑 - 取款操作定义为从账户中减少金额，输入负数会导致相反的操作(存款)</li>
                        <li>用户界面清晰 - 分开的取款和存款功能使操作更明确</li>
                        <li>防止错误 - 避免用户意外输入负号导致操作相反</li>
                        <li>安全考虑 - 限制输入范围减少潜在的漏洞</li>
                        <li>会计准确性 - 确保交易记录清晰，便于审计和跟踪</li>
                      </ul>
                      <p className="mt-2">
                        这是范围检查的一个实际应用，通过限制输入值的范围(只允许正数)来确保系统按预期工作。
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">扩展思考</h3>
                <p className="mb-2">思考以下数据类型的合理范围:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>网站评分 (1-5星)</li>
                  <li>汽车速度 (公里/小时)</li>
                  <li>人类身高 (厘米)</li>
                  <li>计算机存储容量 (GB)</li>
                </ul>
                <p className="mt-2">对于每种类型，考虑:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>最小合理值是什么？为什么？</li>
                  <li>最大合理值是什么？为什么？</li>
                  <li>如果系统接受超出范围的值会有什么后果？</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

