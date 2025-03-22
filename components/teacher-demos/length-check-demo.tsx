"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function LengthCheckDemo() {
  // 密码强度检查器
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

  // 邮政编码验证器
  const [postalCode, setPostalCode] = useState("")
  const [postalCodeValid, setPostalCodeValid] = useState<boolean | null>(null)

  // 用户名验证器
  const [username, setUsername] = useState("")
  const [usernameValid, setUsernameValid] = useState<boolean | null>(null)
  const [usernameMessage, setUsernameMessage] = useState("")

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

  // 检查邮政编码
  const checkPostalCode = () => {
    // 中国邮政编码为6位数字
    const isValid = /^\d{6}$/.test(postalCode)
    setPostalCodeValid(isValid)
  }

  // 检查用户名
  const checkUsername = () => {
    if (username.length < 3) {
      setUsernameValid(false)
      setUsernameMessage("用户名太短，至少需要3个字符")
      return
    }

    if (username.length > 20) {
      setUsernameValid(false)
      setUsernameMessage("用户名太长，最多允许20个字符")
      return
    }

    // 检查用户名是否只包含字母、数字、下划线
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setUsernameValid(false)
      setUsernameMessage("用户名只能包含字母、数字和下划线")
      return
    }

    setUsernameValid(true)
    setUsernameMessage("有效的用户名")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">长度检查交互演示</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="password">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="password">密码强度检查器</TabsTrigger>
            <TabsTrigger value="postal">邮政编码验证器</TabsTrigger>
            <TabsTrigger value="username">用户名验证器</TabsTrigger>
          </TabsList>

          <TabsContent value="password" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">密码强度检查器</h3>
              <p className="text-sm mb-4">密码长度要求: 8-64个字符</p>

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

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">密码长度建议</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">✗</span>
                  </span>
                  <span>少于8个字符: 太短，容易被破解</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">!</span>
                  </span>
                  <span>8-11个字符: 基本安全，但强度不够</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </span>
                  <span>12个或更多字符: 良好的密码长度</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">✗</span>
                  </span>
                  <span>超过64个字符: 太长，可能不被某些系统接受</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="postal" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">邮政编码验证器</h3>
              <p className="text-sm mb-4">中国邮政编码为6位数字</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入邮政编码</label>
                  <div className="flex space-x-2">
                    <Input
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="例如: 100000"
                      maxLength={6}
                      className="flex-1"
                    />
                    <Button onClick={checkPostalCode}>验证</Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">当前长度: {postalCode.length}/6 个字符</p>
                </div>

                {postalCodeValid !== null && (
                  <div className={`p-3 rounded-lg ${postalCodeValid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {postalCodeValid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={postalCodeValid ? "text-green-700" : "text-red-700"}>
                        {postalCodeValid ? "有效的邮政编码" : "无效的邮政编码，必须是6位数字"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">邮政编码可视化</h3>
                <div className="flex items-center justify-center mb-2">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 flex items-center justify-center border ${
                          i < postalCode.length
                            ? "bg-blue-100 border-blue-200 text-blue-600"
                            : "bg-gray-50 border-gray-200 text-gray-400"
                        }`}
                      >
                        {i < postalCode.length ? postalCode[i] : ""}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">邮政编码必须恰好有6位数字</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">邮政编码示例</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>北京市</span>
                    <span className="font-medium">100000-102600</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>上海市</span>
                    <span className="font-medium">200000-202100</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>广州市</span>
                    <span className="font-medium">510000-510900</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>深圳市</span>
                    <span className="font-medium">518000-518100</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="username" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">用户名验证器</h3>
              <p className="text-sm mb-4">用户名长度要求: 3-20个字符，只能包含字母、数字和下划线</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入用户名</label>
                  <div className="flex space-x-2">
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="例如: user_123"
                      className="flex-1"
                    />
                    <Button onClick={checkUsername}>验证</Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">当前长度: {username.length}/20 个字符</p>
                </div>

                {usernameValid !== null && (
                  <div className={`p-3 rounded-lg ${usernameValid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {usernameValid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={usernameValid ? "text-green-700" : "text-red-700"}>{usernameMessage}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">用户名长度可视化</h3>
                <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative mb-2">
                  <div className="absolute inset-y-0 left-0 bg-red-400 w-[15%]"></div>
                  <div className="absolute inset-y-0 left-[15%] right-[15%] bg-green-400"></div>
                  <div className="absolute inset-y-0 right-0 bg-red-400 w-[15%]"></div>

                  <div
                    className="absolute top-0 bottom-0 w-4 h-4 bg-white rounded-full shadow border-2 -ml-2 flex items-center justify-center"
                    style={{
                      left: `${(username.length / 23) * 100}%`,
                      backgroundColor: username.length >= 3 && username.length <= 20 ? "#10B981" : "#EF4444",
                      borderColor: username.length >= 3 && username.length <= 20 ? "#059669" : "#DC2626",
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-red-600">太短</span>
                  <span className="text-green-600">有效长度 (3-20)</span>
                  <span className="text-red-600">太长</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">用户名规则</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>长度在3-20个字符之间</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>可以包含字母 (a-z, A-Z)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>可以包含数字 (0-9)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>可以包含下划线 (_)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">✗</span>
                    </span>
                    <span>不能包含空格或其他特殊字符</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

