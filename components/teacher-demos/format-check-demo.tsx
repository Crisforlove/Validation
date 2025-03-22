"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function FormatCheckDemo() {
  // 电子邮件格式检查
  const [email, setEmail] = useState("")
  const [emailResult, setEmailResult] = useState<null | { valid: boolean; message: string }>(null)

  // 手机号格式检查
  const [phone, setPhone] = useState("")
  const [phoneResult, setPhoneResult] = useState<null | { valid: boolean; message: string }>(null)

  // 身份证号格式检查
  const [idCard, setIdCard] = useState("")
  const [idCardResult, setIdCardResult] = useState<null | { valid: boolean; message: string }>(null)

  // 格式检查游戏
  const [gameExamples, setGameExamples] = useState([
    { value: "user@example.com", format: "email", valid: true },
    { value: "user.example.com", format: "email", valid: false },
    { value: "13812345678", format: "phone", valid: true },
    { value: "138-1234-5678", format: "phone", valid: false },
    { value: "2023-08-24", format: "date", valid: true },
    { value: "24/08/2023", format: "date", valid: false },
  ])
  const [gameAnswers, setGameAnswers] = useState<Record<number, boolean | null>>({})
  const [gameScore, setGameScore] = useState({ correct: 0, total: 0 })
  const [gameSubmitted, setGameSubmitted] = useState(false)

  // 检查电子邮件格式
  const checkEmail = () => {
    if (!email) {
      setEmailResult({ valid: false, message: "请输入电子邮件地址" })
      return
    }

    // 基本电子邮件格式检查
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(email)

    setEmailResult({
      valid: isValid,
      message: isValid ? "✓ 有效的电子邮件格式" : "✗ 无效的电子邮件格式",
    })
  }

  // 检查手机号格式
  const checkPhone = () => {
    if (!phone) {
      setPhoneResult({ valid: false, message: "请输入手机号" })
      return
    }

    // 中国手机号格式检查 (11位数字，以1开头)
    const phoneRegex = /^1[3-9]\d{9}$/
    const isValid = phoneRegex.test(phone)

    setPhoneResult({
      valid: isValid,
      message: isValid ? "✓ 有效的手机号格式" : "✗ 无效的手机号格式",
    })
  }

  // 检查身份证号格式
  const checkIdCard = () => {
    if (!idCard) {
      setIdCardResult({ valid: false, message: "请输入身份证号" })
      return
    }

    // 简单的身份证号格式检查 (18位，最后一位可能是X)
    const idCardRegex = /^\d{17}[\dX]$/
    if (!idCardRegex.test(idCard)) {
      setIdCardResult({
        valid: false,
        message: "✗ 无效的身份证号格式，应为18位",
      })
      return
    }

    // 检查出生日期部分是否有效
    const birthDateStr = idCard.substring(6, 14)
    const year = Number.parseInt(birthDateStr.substring(0, 4))
    const month = Number.parseInt(birthDateStr.substring(4, 6))
    const day = Number.parseInt(birthDateStr.substring(6, 8))

    const date = new Date(year, month - 1, day)
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      setIdCardResult({
        valid: false,
        message: "✗ 身份证号中的出生日期无效",
      })
      return
    }

    // 简单校验码检查 (实际的校验算法更复杂)
    const isValid = true

    setIdCardResult({
      valid: isValid,
      message: isValid ? "✓ 有效的身份证号格式" : "✗ 无效的身份证号格式",
    })
  }

  // 提交格式检查游戏答案
  const submitGameAnswers = () => {
    let correct = 0
    let total = 0

    gameExamples.forEach((example, index) => {
      if (gameAnswers[index] !== null && gameAnswers[index] !== undefined) {
        total++
        if (gameAnswers[index] === example.valid) {
          correct++
        }
      }
    })

    setGameScore({ correct, total })
    setGameSubmitted(true)
  }

  // 重置格式检查游戏
  const resetGame = () => {
    setGameAnswers({})
    setGameScore({ correct: 0, total: 0 })
    setGameSubmitted(false)

    // 随机打乱例子顺序
    const shuffled = [...gameExamples].sort(() => Math.random() - 0.5)
    setGameExamples(shuffled)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">格式检查交互演示</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="email">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="email">电子邮件</TabsTrigger>
            <TabsTrigger value="phone">手机号</TabsTrigger>
            <TabsTrigger value="idcard">身份证号</TabsTrigger>
            <TabsTrigger value="game">格式检查游戏</TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">电子邮件格式检查器</h3>
              <p className="text-sm mb-4">检查电子邮件地址是否符合标准格式</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入电子邮件地址</label>
                  <div className="flex space-x-2">
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="例如: user@example.com"
                      className="flex-1"
                    />
                    <Button onClick={checkEmail}>检查</Button>
                  </div>
                </div>

                {emailResult && (
                  <div className={`p-3 rounded-lg ${emailResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {emailResult.valid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={emailResult.valid ? "text-green-700" : "text-red-700"}>{emailResult.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">电子邮件格式规则</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">1</span>
                    </span>
                    <span>必须包含 @ 符号</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">2</span>
                    </span>
                    <span>@ 符号前必须有用户名</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">3</span>
                    </span>
                    <span>@ 符号后必须有域名</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">4</span>
                    </span>
                    <span>域名必须包含至少一个点和顶级域名</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">示例</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-medium text-green-700">有效格式 ✓</p>
                    <ul className="list-disc pl-5 text-sm">
                      <li>user@example.com</li>
                      <li>name.surname@domain.co.uk</li>
                      <li>info@company-name.org</li>
                    </ul>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <p className="font-medium text-red-700">无效格式 ✗</p>
                    <ul className="list-disc pl-5 text-sm">
                      <li>user.example.com (缺少 @ 符号)</li>
                      <li>@domain.com (缺少用户名)</li>
                      <li>user@domain (缺少顶级域名)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="phone" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">手机号格式检查器</h3>
              <p className="text-sm mb-4">检查中国手机号是否符合标准格式 (11位数字，以1开头)</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入手机号</label>
                  <div className="flex space-x-2">
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="例如: 13812345678"
                      className="flex-1"
                    />
                    <Button onClick={checkPhone}>检查</Button>
                  </div>
                </div>

                {phoneResult && (
                  <div className={`p-3 rounded-lg ${phoneResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {phoneResult.valid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={phoneResult.valid ? "text-green-700" : "text-red-700"}>{phoneResult.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">中国手机号格式规则</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">1</span>
                    </span>
                    <span>必须是11位数字</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">2</span>
                    </span>
                    <span>必须以数字1开头</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">3</span>
                    </span>
                    <span>第二位必须是3-9之间的数字</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">4</span>
                    </span>
                    <span>不能包含空格、连字符或其他特殊字符</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">示例</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-medium text-green-700">有效格式 ✓</p>
                    <ul className="list-disc pl-5 text-sm">
                      <li>13812345678</li>
                      <li>15912345678</li>
                      <li>18812345678</li>
                    </ul>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <p className="font-medium text-red-700">无效格式 ✗</p>
                    <ul className="list-disc pl-5 text-sm">
                      <li>138-1234-5678 (包含连字符)</li>
                      <li>1381234567 (少于11位)</li>
                      <li>23812345678 (不以1开头)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="idcard" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">身份证号格式检查器</h3>
              <p className="text-sm mb-4">检查中国身份证号是否符合标准格式 (18位，最后一位可能是X)</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入身份证号</label>
                  <div className="flex space-x-2">
                    <Input
                      value={idCard}
                      onChange={(e) => setIdCard(e.target.value)}
                      placeholder="例如: 110101199001011234"
                      className="flex-1"
                    />
                    <Button onClick={checkIdCard}>检查</Button>
                  </div>
                </div>

                {idCardResult && (
                  <div className={`p-3 rounded-lg ${idCardResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {idCardResult.valid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={idCardResult.valid ? "text-green-700" : "text-red-700"}>{idCardResult.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">身份证号格式规则</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">1</span>
                    </span>
                    <span>必须是18位</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">2</span>
                    </span>
                    <span>前6位是地区代码</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">3</span>
                    </span>
                    <span>中间8位是出生日期 (YYYYMMDD)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">4</span>
                    </span>
                    <span>最后一位是校验码，可能是数字或X</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">身份证号结构</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="grid grid-cols-18 gap-0">
                      {Array.from({ length: 18 }).map((_, i) => {
                        let bgColor = "bg-gray-100"
                        let textColor = "text-gray-700"

                        if (i < 6) {
                          bgColor = "bg-blue-100"
                          textColor = "text-blue-700"
                        } else if (i >= 6 && i < 14) {
                          bgColor = "bg-green-100"
                          textColor = "text-green-700"
                        } else if (i >= 14 && i < 17) {
                          bgColor = "bg-yellow-100"
                          textColor = "text-yellow-700"
                        } else {
                          bgColor = "bg-red-100"
                          textColor = "text-red-700"
                        }

                        return (
                          <div
                            key={i}
                            className={`w-5 h-8 flex items-center justify-center ${bgColor} ${textColor} text-xs border border-white`}
                          >
                            {i < idCard.length ? idCard[i] : ""}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="p-1 bg-blue-50 text-center text-blue-700">地区代码</div>
                    <div className="p-1 bg-green-50 text-center text-green-700">出生日期</div>
                    <div className="p-1 bg-yellow-50 text-center text-yellow-700">顺序码</div>
                    <div className="p-1 bg-red-50 text-center text-red-700">校验码</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="game" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">格式检查游戏</h3>
              <p className="text-sm mb-4">判断下面的值是否符合其声明的格式</p>

              <div className="space-y-4">
                {gameExamples.map((example, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-medium">值: </span>
                        <span className="font-mono">{example.value}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        声明格式:{" "}
                        {example.format === "email" ? "电子邮件" : example.format === "phone" ? "手机号" : "日期"}
                      </div>
                    </div>

                    {!gameSubmitted ? (
                      <div className="flex space-x-2">
                        <Button
                          variant={gameAnswers[index] === true ? "default" : "outline"}
                          size="sm"
                          onClick={() => setGameAnswers({ ...gameAnswers, [index]: true })}
                          className="flex-1"
                        >
                          有效格式
                        </Button>
                        <Button
                          variant={gameAnswers[index] === false ? "default" : "outline"}
                          size="sm"
                          onClick={() => setGameAnswers({ ...gameAnswers, [index]: false })}
                          className="flex-1"
                        >
                          无效格式
                        </Button>
                      </div>
                    ) : (
                      <div
                        className={`p-2 rounded ${example.valid === gameAnswers[index] ? "bg-green-50" : "bg-red-50"}`}
                      >
                        <div className="flex items-center">
                          {example.valid === gameAnswers[index] ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <p
                            className={
                              example.valid === gameAnswers[index] ? "text-green-700 text-sm" : "text-red-700 text-sm"
                            }
                          >
                            {example.valid ? "✓ 正确格式" : "✗ 错误格式"}
                            {example.valid !== gameAnswers[index] && " (回答错误)"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex space-x-2">
                  {!gameSubmitted ? (
                    <Button onClick={submitGameAnswers} className="flex-1">
                      提交答案
                    </Button>
                  ) : (
                    <Button onClick={resetGame} className="flex-1">
                      重新开始
                    </Button>
                  )}
                </div>

                {gameSubmitted && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">得分:</span>
                      <span className="font-bold text-lg">
                        {gameScore.correct}/{gameScore.total} (
                        {gameScore.total > 0 ? Math.round((gameScore.correct / gameScore.total) * 100) : 0}%)
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">格式检查的重要性</h3>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">为什么格式检查很重要?</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>确保数据可以被系统正确处理</li>
                    <li>防止无效数据导致系统错误</li>
                    <li>提高用户体验，及时提供反馈</li>
                    <li>保护系统安全，防止恶意输入</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">常见的格式检查应用</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>网站注册表单</li>
                    <li>在线支付系统</li>
                    <li>数据导入工具</li>
                    <li>搜索引擎</li>
                    <li>社交媒体平台</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

