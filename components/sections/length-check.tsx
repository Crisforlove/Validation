"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"

export default function LengthCheck() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<null | { valid: boolean; message: string }>(null)
  const [minLength, setMinLength] = useState("8")
  const [maxLength, setMaxLength] = useState("12")
  const [exactMode, setExactMode] = useState(false)

  const handleCheck = () => {
    const length = value.length
    const min = Number(minLength)
    const max = Number(maxLength)

    if (exactMode) {
      if (length !== min) {
        setResult({ valid: false, message: `文本长度必须恰好为 ${min} 个字符` })
      } else {
        setResult({ valid: true, message: `有效文本: 长度为 ${length} 个字符` })
      }
    } else {
      if (length < min) {
        setResult({ valid: false, message: `文本太短，至少需要 ${min} 个字符` })
      } else if (length > max) {
        setResult({ valid: false, message: `文本太长，最多允许 ${max} 个字符` })
      } else {
        setResult({ valid: true, message: `有效文本: 长度为 ${length} 个字符` })
      }
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">验证方法 2: 长度检查 (Length Check)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">定义 (Definition)</h3>
        <p className="text-lg text-gray-700">确保数据包含特定数量的字符</p>
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
                <p className="text-lg font-medium">邮政编码</p>
                <p className="text-gray-600">必须恰好有6位数字</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">用户名</p>
                <p className="text-gray-600">必须在3-15个字符之间</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">密码</p>
                <p className="text-gray-600">通常要求最少8个字符</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">代码示例</h4>
            <div className="mb-4">
              <h5 className="text-sm font-medium mb-2">精确长度检查</h5>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
                {`OUTPUT "Please enter your value of ", Limit , "  characters "
REPEAT
 INPUT Value
 IF LENGTH(Value) <> Limit
  THEN
   OUTPUT "Your value must be exactly" , Limit ," characters, please re-enter "
 ENDIF
UNTIL LENGTH(Value) = Limit`}
              </pre>
            </div>

            <div>
              <h5 className="text-sm font-medium mb-2">长度范围检查</h5>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
                {`OUTPUT "Please enter your value "
REPEAT
 INPUT Value
 IF LENGTH(Value) > UpperLimit OR LENGTH(Value) < LowerLimit
  THEN
   OUTPUT "Too short or too long, please re-enter "
 ENDIF
UNTIL LENGTH(Value) <= UpperLimit AND LENGTH(Value) >= LowerLimit`}
              </pre>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">长度检查演示</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Button variant={exactMode ? "default" : "outline"} onClick={() => setExactMode(true)} size="sm">
                  精确长度
                </Button>
                <Button variant={!exactMode ? "default" : "outline"} onClick={() => setExactMode(false)} size="sm">
                  长度范围
                </Button>
              </div>

              {exactMode ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">精确长度</label>
                  <Input type="number" value={minLength} onChange={(e) => setMinLength(e.target.value)} />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">最小长度</label>
                    <Input type="number" value={minLength} onChange={(e) => setMinLength(e.target.value)} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">最大长度</label>
                    <Input type="number" value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">输入文本进行检查</label>
                <div className="flex space-x-2">
                  <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="输入文本" />
                  <Button onClick={handleCheck}>检查</Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">当前长度: {value.length} 个字符</p>
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

            <div className="mt-6">
              <h4 className="font-semibold mb-3">长度可视化</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <div className="flex">
                    {Array.from({ length: exactMode ? Number(minLength) : Number(maxLength) }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 flex items-center justify-center border border-blue-200 ${
                          i < value.length ? "bg-blue-100 text-blue-600" : "bg-gray-50 text-gray-400"
                        } ${!exactMode && i >= Number(minLength) ? "border-dashed" : "border-solid"}`}
                      >
                        {i < value.length ? value[i] : ""}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">
                  {exactMode
                    ? `文本必须恰好有 ${minLength} 个字符`
                    : `文本长度必须在 ${minLength}-${maxLength} 个字符之间`}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">长度检查互动游戏</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">游戏: "密码管理员"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>创建一个满足特定长度要求的密码</li>
              <li>系统判断密码是否满足长度要求</li>
              <li>尝试不同的长度要求挑战</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">游戏目标</h5>
              <p>理解文本长度的概念，并能创建符合长度要求的密码。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "字符计数挑战"</h5>
                <p className="mb-2">材料: 准备一些需要特定长度的数据类型卡片</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>展示不同类型的数据（如邮政编码、手机号、用户名）</li>
                  <li>学生猜测每种数据类型的合理长度要求</li>
                  <li>学生创建符合长度要求的示例</li>
                  <li>讨论为什么长度限制对不同数据类型很重要</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实际例子</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">中国身份证号</p>
                    <p>精确长度: 18位</p>
                    <p className="text-xs text-gray-500">（包含地区、出生日期和校验位）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">手机号码</p>
                    <p>精确长度: 11位</p>
                    <p className="text-xs text-gray-500">（不包含国家代码和分隔符）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">用户名</p>
                    <p>长度范围: 3-20位</p>
                    <p className="text-xs text-gray-500">（太短难以识别，太长难以记忆）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">密码</p>
                    <p>长度范围: 8-64位</p>
                    <p className="text-xs text-gray-500">（安全性考虑）</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">互动活动</h5>
                <p className="mb-2">让学生创建一个"长度检查器"海报，展示：</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>至少5种需要精确长度的数据类型</li>
                  <li>至少5种需要长度范围的数据类型</li>
                  <li>每种类型的实际例子和长度要求</li>
                  <li>解释为什么这些长度限制很重要</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

