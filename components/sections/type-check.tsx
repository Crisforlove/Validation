"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"

export default function TypeCheck() {
  const [value, setValue] = useState("")
  const [selectedType, setSelectedType] = useState<"number" | "text" | "date" | "email">("number")
  const [result, setResult] = useState<null | { valid: boolean; message: string }>(null)

  const handleCheck = () => {
    if (!value) {
      setResult({ valid: false, message: "请输入值进行检查" })
      return
    }

    switch (selectedType) {
      case "number":
        const num = Number(value)
        if (isNaN(num) || value.includes(" ")) {
          setResult({ valid: false, message: "无效数字" })
        } else {
          setResult({ valid: true, message: `有效数字: ${num}` })
        }
        break

      case "date":
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(value)) {
          setResult({ valid: false, message: "无效日期格式，应为 YYYY-MM-DD" })
        } else {
          const date = new Date(value)
          if (isNaN(date.getTime())) {
            setResult({ valid: false, message: "无效日期" })
          } else {
            setResult({ valid: true, message: `有效日期: ${value}` })
          }
        }
        break

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          setResult({ valid: false, message: "无效电子邮件地址" })
        } else {
          setResult({ valid: true, message: `有效电子邮件: ${value}` })
        }
        break

      case "text":
        if (value.trim() === "") {
          setResult({ valid: false, message: "文本不能为空" })
        } else {
          setResult({ valid: true, message: `有效文本: ${value}` })
        }
        break
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">验证方法 3: 类型检查 (Type Check)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">定义 (Definition)</h3>
        <p className="text-lg text-gray-700">确保输入的数据是正确的数据类型</p>
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
                <p className="text-lg font-medium">年龄</p>
                <p className="text-gray-600">必须是数字，不能是字母</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">电话号码</p>
                <p className="text-gray-600">不能包含字母</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">日期</p>
                <p className="text-gray-600">必须是有效的日期格式</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">代码示例</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              {`OUTPUT "Enter the value "
REPEAT
 INPUT Value
 IF Value <> DIV(Value, 1)
  THEN
   OUTPUT "This must be a whole number, please re-enter"
 ENDIF
UNTIL Value = DIV(Value, 1)`}
            </pre>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">常见数据类型 (Common Data Types)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-blue-600 font-bold text-xs">123</span>
                  </div>
                  <span className="font-medium">数字 (Number)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">例如: 1, 42, -5, 3.14</p>
              </div>

              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-green-600 font-bold text-xs">Abc</span>
                  </div>
                  <span className="font-medium">文本 (Text)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">例如: "Hello", "Name"</p>
              </div>

              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-yellow-600 font-bold text-xs">T/F</span>
                  </div>
                  <span className="font-medium">布尔值 (Boolean)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">例如: true, false</p>
              </div>

              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-purple-600 font-bold text-xs">📅</span>
                  </div>
                  <span className="font-medium">日期 (Date)</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">例如: 2023-08-24</p>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">类型检查演示</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">选择数据类型</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={selectedType === "number" ? "default" : "outline"}
                    onClick={() => setSelectedType("number")}
                    size="sm"
                  >
                    数字
                  </Button>
                  <Button
                    variant={selectedType === "text" ? "default" : "outline"}
                    onClick={() => setSelectedType("text")}
                    size="sm"
                  >
                    文本
                  </Button>
                  <Button
                    variant={selectedType === "date" ? "default" : "outline"}
                    onClick={() => setSelectedType("date")}
                    size="sm"
                  >
                    日期
                  </Button>
                  <Button
                    variant={selectedType === "email" ? "default" : "outline"}
                    onClick={() => setSelectedType("email")}
                    size="sm"
                  >
                    电子邮件
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">输入值进行检查</label>
                <div className="flex space-x-2">
                  <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={
                      selectedType === "number"
                        ? "输入数字"
                        : selectedType === "date"
                          ? "输入日期 (YYYY-MM-DD)"
                          : selectedType === "email"
                            ? "输入电子邮件地址"
                            : "输入文本"
                    }
                    type={selectedType === "number" ? "text" : selectedType === "date" ? "text" : "text"}
                  />
                  <Button onClick={handleCheck}>检查</Button>
                </div>
              </div>

              {result && (
                <div className={`p-4 rounded-lg ${result.valid ? "bg-green-50" : "bg-red-50"}`}>
                  <div className="flex items-center">
                    {result.valid ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mr-2" />
                    )}
                    <p className={result.valid ? "text-green-700" : "text-red-700"}>{result.message}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">类型检查提示</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <span>数字类型不应包含字母或特殊字符</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <span>日期应遵循特定格式 (如 YYYY-MM-DD)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <span>电子邮件必须包含 @ 符号和域名</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">类型检查互动游戏</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">游戏: "类型分类器"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>老师展示不同类型的信息</li>
              <li>学生判断它是什么类型（数字、文本、日期等）</li>
              <li>正确分类得分</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">游戏目标</h5>
              <p>理解不同数据类型的特征，并能快速识别各种数据类型。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "数据类型分类"</h5>
                <p className="mb-2">材料: 准备各种数据类型的卡片（数字、文本、日期、布尔值等）</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>将学生分成小组，每组发放一套混合数据类型卡片</li>
                  <li>学生必须将卡片分类为正确的数据类型</li>
                  <li>讨论为什么某些数据看起来像一种类型但实际上是另一种</li>
                  <li>展示当数据类型错误时可能发生的问题</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">常见混淆示例</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">"42" vs 42</p>
                    <p>一个是文本字符串，一个是数字</p>
                    <p className="text-xs text-gray-500">（不能用字符串进行数学计算）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">"2023-08-24" vs 日期对象</p>
                    <p>一个是文本表示，一个是日期类型</p>
                    <p className="text-xs text-gray-500">（日期对象可以进行日期计算）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">"true" vs true</p>
                    <p>一个是文本字符串，一个是布尔值</p>
                    <p className="text-xs text-gray-500">（布尔值用于条件判断）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">"123-45-6789" vs 数字</p>
                    <p>社会安全号是文本，不是数字</p>
                    <p className="text-xs text-gray-500">（带连字符的标识符通常是文本）</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实际应用示例</h5>
                <p className="mb-2">展示类型错误的实际后果：</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>在计算器中输入字母而不是数字</li>
                  <li>在日期字段中输入文本导致日历功能失效</li>
                  <li>尝试对电话号码进行数学运算（如果存储为数字，前导零会丢失）</li>
                  <li>在编程中，字符串"5" + "5"等于"55"，而数字5 + 5等于10</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

