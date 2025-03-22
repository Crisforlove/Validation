"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function LengthCheckLesson() {
  const [activeTab, setActiveTab] = useState("teacher")

  // 密码长度检查器状态
  const [password, setPassword] = useState("")
  const [passwordFeedback, setPasswordFeedback] = useState<{
    valid: boolean
    message: string
    strength: "weak" | "medium" | "strong" | "none"
  }>({
    valid: false,
    message: "",
    strength: "none",
  })

  // 挑战问题状态
  const [challengeAnswer1, setChallengeAnswer1] = useState("")
  const [challengeAnswer2, setChallengeAnswer2] = useState("")
  const [showAnswer1, setShowAnswer1] = useState(false)
  const [showAnswer2, setShowAnswer2] = useState(false)

  // 检查密码强度
  const checkPasswordStrength = (value: string) => {
    if (!value) {
      setPasswordFeedback({
        valid: false,
        message: "请输入密码",
        strength: "none",
      })
      return
    }

    if (value.length < 8) {
      setPasswordFeedback({
        valid: false,
        message: "密码太短，至少需要8个字符",
        strength: "weak",
      })
      return
    }

    if (value.length > 64) {
      setPasswordFeedback({
        valid: false,
        message: "密码太长，最多允许64个字符",
        strength: "weak",
      })
      return
    }

    let strength: "weak" | "medium" | "strong" = "weak"

    // 检查密码强度
    const hasLowerCase = /[a-z]/.test(value)
    const hasUpperCase = /[A-Z]/.test(value)
    const hasNumbers = /\d/.test(value)
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value)

    const varietyCount = [hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChars].filter(Boolean).length

    if (value.length >= 12 && varietyCount >= 3) {
      strength = "strong"
    } else if (value.length >= 10 && varietyCount >= 2) {
      strength = "medium"
    }

    setPasswordFeedback({
      valid: true,
      message: strength === "strong" ? "强密码！" : strength === "medium" ? "中等强度密码" : "弱密码，建议增加复杂度",
      strength,
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
              <CardTitle>实时演示: "字符长度限制"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">材料:</h3>
                <p>准备不同类型的输入字段示例，展示长度限制的重要性</p>

                <h3 className="font-medium mt-4 mb-2">演示步骤:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>展示不同类型的输入字段（用户名、密码、邮政编码等）</li>
                  <li>讨论每种字段的合理长度限制</li>
                  <li>演示输入过短或过长时的问题</li>
                  <li>展示如何实施长度检查</li>
                  <li>讨论长度检查与数据安全的关系</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">教学提示:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>解释为什么不同数据类型有不同的长度限制</li>
                  <li>讨论过短和过长输入的潜在安全风险</li>
                  <li>展示如何在用户界面中提供长度反馈</li>
                  <li>强调长度检查是数据验证的基础层</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">互动活动:</h3>
                <p className="mb-2">让学生尝试"密码强度检查器":</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">输入密码</label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        checkPasswordStrength(e.target.value)
                      }}
                      placeholder="输入密码"
                    />
                    <p className="text-sm text-gray-500 mt-1">当前长度: {password.length} 个字符</p>
                  </div>

                  {passwordFeedback.strength !== "none" && (
                    <div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            passwordFeedback.strength === "strong"
                              ? "bg-green-500 w-full"
                              : passwordFeedback.strength === "medium"
                                ? "bg-yellow-500 w-2/3"
                                : "bg-red-500 w-1/3"
                          }`}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>弱</span>
                        <span>中</span>
                        <span>强</span>
                      </div>

                      <div
                        className={`p-3 rounded-lg mt-3 ${
                          passwordFeedback.strength === "strong"
                            ? "bg-green-50"
                            : passwordFeedback.strength === "medium"
                              ? "bg-yellow-50"
                              : "bg-red-50"
                        }`}
                      >
                        <div className="flex items-center">
                          {passwordFeedback.strength === "strong" ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          ) : passwordFeedback.strength === "medium" ? (
                            <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mr-2" />
                          )}
                          <p
                            className={
                              passwordFeedback.strength === "strong"
                                ? "text-green-700"
                                : passwordFeedback.strength === "medium"
                                  ? "text-yellow-700"
                                  : "text-red-700"
                            }
                          >
                            {passwordFeedback.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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
                  <h3 className="font-medium mb-2">用户名</h3>
                  <p className="font-bold">合理长度: 3-20个字符</p>
                  <p className="text-sm text-gray-600 mt-1">
                    太短: 难以识别用户
                    <br />
                    太长: 占用存储空间，难以显示
                  </p>

                  <div className="mt-4">
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-red-400" style={{ width: "15%" }}></div>
                      <div className="absolute inset-y-0 left-15% bg-green-400" style={{ width: "70%" }}></div>
                      <div className="absolute inset-y-0 left-85% right-0 bg-red-400"></div>

                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "15%" }}></div>
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "85%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0</span>
                      <span>3</span>
                      <span>20</span>
                      <span>30</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">密码</h3>
                  <p className="font-bold">合理长度: 8-64个字符</p>
                  <p className="text-sm text-gray-600 mt-1">
                    太短: 容易被破解
                    <br />
                    太长: 系统限制，用户难以记忆
                  </p>

                  <div className="mt-4">
                    <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative">
                      <div className="absolute inset-y-0 left-0 bg-red-400" style={{ width: "12%" }}></div>
                      <div className="absolute inset-y-0 left-12% bg-green-400" style={{ width: "84%" }}></div>
                      <div className="absolute inset-y-0 left-96% right-0 bg-red-400"></div>

                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "12%" }}></div>
                      <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: "96%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0</span>
                      <span>8</span>
                      <span>64</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">邮政编码</h3>
                  <p className="font-bold">固定长度: 6个字符</p>
                  <p className="text-sm text-gray-600 mt-1">中国邮政编码为6位数字</p>

                  <div className="mt-4">
                    <div className="flex items-center justify-center mb-2">
                      <div className="grid grid-cols-6 gap-1">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 flex items-center justify-center border border-blue-200 bg-blue-100 text-blue-600"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600">邮政编码必须恰好有6位数字</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">手机号</h3>
                  <p className="font-bold">固定长度: 11个字符</p>
                  <p className="text-sm text-gray-600 mt-1">中国手机号为11位数字</p>

                  <div className="mt-4">
                    <div className="flex items-center justify-center mb-2">
                      <div className="grid grid-cols-11 gap-0">
                        {Array.from({ length: 11 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-8 flex items-center justify-center border border-blue-200 bg-blue-100 text-blue-600 text-xs"
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600">手机号必须恰好有11位数字</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>长度检查的实际应用</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">用户界面设计</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>输入框长度限制</li>
                    <li>显示字符计数器</li>
                    <li>表单验证反馈</li>
                    <li>防止表单提交过长数据</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">数据库设计</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>字段长度定义</li>
                    <li>存储空间优化</li>
                    <li>索引效率提升</li>
                    <li>防止数据截断</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">安全考虑</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>防止缓冲区溢出</li>
                    <li>限制恶意输入</li>
                    <li>减少DOS攻击风险</li>
                    <li>保护系统资源</li>
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
                <h3 className="font-medium mb-2">问题1: 安全隐患</h3>
                <p className="mb-4">"为什么允许用户输入无限长的文本可能会导致安全问题？"</p>

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
                      <p>允许无限长文本输入可能导致以下安全问题:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>缓冲区溢出攻击 - 超长输入可能导致内存溢出，执行恶意代码</li>
                        <li>拒绝服务攻击 - 大量数据可能耗尽系统资源，导致服务崩溃</li>
                        <li>数据库注入 - 超长文本可能包含SQL注入或其他代码注入攻击</li>
                        <li>存储问题 - 可能导致数据库存储空间迅速耗尽</li>
                        <li>性能问题 - 处理超长文本会消耗过多CPU和内存资源</li>
                      </ul>
                      <p className="mt-2">
                        通过实施适当的长度检查，可以防止这些安全风险，确保系统只接受合理长度的输入。
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">问题2: 用户体验</h3>
                <p className="mb-4">"Twitter为什么限制推文长度为280个字符？这种限制有什么好处？"</p>

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
                      <p>Twitter限制推文长度为280个字符的好处:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>提高内容简洁性 - 鼓励用户表达简洁明了的想法</li>
                        <li>增强可读性 - 短文本更容易快速阅读和理解</li>
                        <li>提高参与度 - 用户更愿意阅读和回复简短内容</li>
                        <li>减少存储和带宽需求 - 短文本需要更少的存储空间和传输带宽</li>
                        <li>平台特色 - 成为Twitter的标志性特点，区别于其他社交媒体</li>
                        <li>促进创造力 - 限制迫使用户更有创意地表达想法</li>
                      </ul>
                      <p className="mt-2">
                        这是长度限制在产品设计中的一个很好例子，它不仅有技术上的考虑，还塑造了产品的核心用户体验。
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">扩展思考</h3>
                <p className="mb-2">思考以下数据类型的合理长度限制:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>电子邮件地址</li>
                  <li>文章标题</li>
                  <li>产品描述</li>
                  <li>评论内容</li>
                </ul>
                <p className="mt-2">对于每种类型，考虑:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>最小合理长度是什么？为什么？</li>
                  <li>最大合理长度是什么？为什么？</li>
                  <li>如何在用户界面中优雅地处理长度限制？</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

