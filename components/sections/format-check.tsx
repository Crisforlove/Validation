"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function FormatCheck() {
  const [emailValue, setEmailValue] = useState("")
  const [dateValue, setDateValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [emailResult, setEmailResult] = useState<null | { valid: boolean; message: string }>(null)
  const [dateResult, setDateResult] = useState<null | { valid: boolean; message: string }>(null)
  const [phoneResult, setPhoneResult] = useState<null | { valid: boolean; message: string }>(null)

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailValue) {
      setEmailResult({ valid: false, message: "请输入电子邮件地址" })
    } else if (!emailRegex.test(emailValue)) {
      setEmailResult({ valid: false, message: "无效的电子邮件格式" })
    } else {
      setEmailResult({ valid: true, message: "有效的电子邮件地址" })
    }
  }

  const checkDate = () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateValue) {
      setDateResult({ valid: false, message: "请输入日期" })
    } else if (!dateRegex.test(dateValue)) {
      setDateResult({ valid: false, message: "无效的日期格式，应为 YYYY-MM-DD" })
    } else {
      const date = new Date(dateValue)
      if (isNaN(date.getTime())) {
        setDateResult({ valid: false, message: "无效的日期" })
      } else {
        setDateResult({ valid: true, message: "有效的日期" })
      }
    }
  }

  const checkPhone = () => {
    const phoneRegex = /^\+\d{1,3}-\d{3,4}-\d{3,4}-\d{4}$/
    if (!phoneValue) {
      setPhoneResult({ valid: false, message: "请输入电话号码" })
    } else if (!phoneRegex.test(phoneValue)) {
      setPhoneResult({ valid: false, message: "无效的电话格式，应为 +XX-XXX-XXX-XXXX" })
    } else {
      setPhoneResult({ valid: true, message: "有效的电话号码" })
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">验证方法 5: 格式检查 (Format Check)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">定义 (Definition)</h3>
        <p className="text-lg text-gray-700">确保输入的数据符合预定义的模式</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">示例</h3>
          <ul className="space-y-4">
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">电子邮件</p>
                <p className="text-gray-600">必须包含 @ 符号</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">日期</p>
                <p className="text-gray-600">必须是 DD/MM/YYYY 格式</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">电话号码</p>
                <p className="text-gray-600">必须遵循特定国家格式</p>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">格式模式 (Format Patterns)</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-lg font-medium mb-2">电子邮件格式 (Email Format)</h4>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600 font-bold text-xs">@</span>
                  </div>
                  <p className="text-gray-700">username@domain.com</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <span className="text-green-600">✓</span> user@example.com
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <span className="text-red-600">✗</span> user.example.com
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <span className="text-red-600">✗</span> user@example
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-lg font-medium mb-2">日期格式 (Date Format)</h4>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600 font-bold text-xs">📅</span>
                  </div>
                  <p className="text-gray-700">YYYY-MM-DD</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <span className="text-green-600">✓</span> 2023-08-24
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <span className="text-red-600">✗</span> 24/08/2023
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <span className="text-red-600">✗</span> 2023.08.24
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-lg font-medium mb-2">电话格式 (Phone Format)</h4>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600 font-bold text-xs">📞</span>
                  </div>
                  <p className="text-gray-700">+XX-XXX-XXX-XXXX</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <span className="text-green-600">✓</span> +1-555-123-4567
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <span className="text-red-600">✗</span> 5551234567
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <span className="text-red-600">✗</span> +1(555)123-4567
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">格式检查演示</h3>

            <Tabs defaultValue="email">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="email">电子邮件</TabsTrigger>
                <TabsTrigger value="date">日期</TabsTrigger>
                <TabsTrigger value="phone">电话</TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">输入电子邮件地址</label>
                  <div className="flex space-x-2">
                    <Input
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      placeholder="例如: user@example.com"
                    />
                    <Button onClick={checkEmail}>检查</Button>
                  </div>
                </div>

                {emailResult && (
                  <div className={`p-4 rounded-lg ${emailResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {emailResult.valid ? (
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 mr-2" />
                      )}
                      <p className={emailResult.valid ? "text-green-700" : "text-red-700"}>{emailResult.message}</p>
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">电子邮件格式规则</h4>
                  <ul className="space-y-1 text-sm">
                    <li>必须有 @ 符号前的用户名</li>
                    <li>必须有 @ 符号</li>
                    <li>必须有带扩展名的域名 (.com, .org 等)</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="date" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">输入日期 (YYYY-MM-DD)</label>
                  <div className="flex space-x-2">
                    <Input
                      value={dateValue}
                      onChange={(e) => setDateValue(e.target.value)}
                      placeholder="例如: 2023-08-24"
                    />
                    <Button onClick={checkDate}>检查</Button>
                  </div>
                </div>

                {dateResult && (
                  <div className={`p-4 rounded-lg ${dateResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {dateResult.valid ? (
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 mr-2" />
                      )}
                      <p className={dateResult.valid ? "text-green-700" : "text-red-700"}>{dateResult.message}</p>
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">日期格式规则</h4>
                  <ul className="space-y-1 text-sm">
                    <li>格式必须为 YYYY-MM-DD</li>
                    <li>年份必须是有效的 4 位数字</li>
                    <li>月份必须在 01-12 之间</li>
                    <li>日期必须对该月有效</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    输入电话号码 (+XX-XXX-XXX-XXXX)
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      value={phoneValue}
                      onChange={(e) => setPhoneValue(e.target.value)}
                      placeholder="例如: +1-555-123-4567"
                    />
                    <Button onClick={checkPhone}>检查</Button>
                  </div>
                </div>

                {phoneResult && (
                  <div className={`p-4 rounded-lg ${phoneResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {phoneResult.valid ? (
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 mr-2" />
                      )}
                      <p className={phoneResult.valid ? "text-green-700" : "text-red-700"}>{phoneResult.message}</p>
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">电话格式规则</h4>
                  <ul className="space-y-1 text-sm">
                    <li>必须以 + 开头，后跟国家代码</li>
                    <li>必须使用连字符 (-) 分隔各部分</li>
                    <li>必须遵循 +XX-XXX-XXX-XXXX 格式</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">格式检查互动游戏</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">游戏: "格式侦探"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>展示正确和错误格式的数据示例</li>
              <li>学生判断它们是否符合格式要求</li>
              <li>正确识别得分</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">游戏目标</h5>
              <p>理解数据格式的重要性，并能识别符合特定格式的数据。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "格式侦探"</h5>
                <p className="mb-2">材料: 准备各种格式正确和错误的数据示例</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>展示不同类型的数据（电子邮件、日期、电话号码、邮政编码等）</li>
                  <li>包括正确和错误格式的例子</li>
                  <li>学生必须识别哪些是正确的，哪些是错误的</li>
                  <li>讨论每种数据类型的正确格式规则</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">常见格式规则</h5>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">电子邮件格式</p>
                    <p className="text-green-500">✓ username@domain.com</p>
                    <p className="text-red-500">✗ username@domain (缺少顶级域名)</p>
                    <p className="text-red-500">✗ username.domain.com (缺少@符号)</p>
                    <p className="text-red-500">✗ @domain.com (缺少用户名)</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">中国手机号格式</p>
                    <p className="text-green-500">✓ 13812345678 (11位数字)</p>
                    <p className="text-green-500">✓ +86 138 1234 5678 (带国际代码和分隔)</p>
                    <p className="text-red-500">✗ 138-1234-5678 (不正确的分隔符)</p>
                    <p className="text-red-500">✗ 8613812345678 (缺少+号)</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">日期格式</p>
                    <p className="text-green-500">✓ 2023-08-24 (ISO标准格式)</p>
                    <p className="text-green-500">✓ 24/08/2023 (日/月/年格式)</p>
                    <p className="text-red-500">✗ 24-08-23 (年份不完整)</p>
                    <p className="text-red-500">✗ 2023/13/24 (月份无效)</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">正则表达式示例</h5>
                <p className="mb-2">展示如何使用正则表达式验证格式（适合高年级学生）：</p>
                <div className="space-y-2 text-xs font-mono bg-gray-900 text-white p-3 rounded">
                  <p>// 电子邮件验证</p>
                  <p>/^[^\s@]+@[^\s@]+\.[^\s@]+$/</p>
                  <p className="mt-2">// 中国手机号验证</p>
                  <p>/^1[3-9]\d{9}$/</p>
                  <p className="mt-2">// ISO日期验证 (YYYY-MM-DD)</p>
                  <p>
                    /^\d{4}-\d{2}-\d{2}$/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

