"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"

export default function CheckDigit() {
  const [isbn, setIsbn] = useState("")
  const [result, setResult] = useState<null | { valid: boolean; message: string }>(null)
  const [showCalculation, setShowCalculation] = useState(false)

  // ISBN-10 check digit calculation
  const calculateIsbn10CheckDigit = (digits: number[]): string => {
    if (digits.length !== 9) return "Error: Need 9 digits"

    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += digits[i] * (10 - i)
    }

    const remainder = sum % 11
    const checkDigit = 11 - remainder

    if (checkDigit === 10) return "X"
    if (checkDigit === 11) return "0"
    return checkDigit.toString()
  }

  const validateIsbn10 = (isbn: string): boolean => {
    // Remove hyphens and spaces
    const cleanIsbn = isbn.replace(/[-\s]/g, "")

    if (cleanIsbn.length !== 10) return false

    let sum = 0
    for (let i = 0; i < 9; i++) {
      const digit = Number.parseInt(cleanIsbn[i], 10)
      if (isNaN(digit)) return false
      sum += digit * (10 - i)
    }

    const lastChar = cleanIsbn[9]
    const lastDigit = lastChar === "X" ? 10 : Number.parseInt(lastChar, 10)
    if (isNaN(lastDigit)) return false

    sum += lastDigit
    return sum % 11 === 0
  }

  const handleCheck = () => {
    if (!isbn) {
      setResult({ valid: false, message: "请输入 ISBN-10" })
      return
    }

    const cleanIsbn = isbn.replace(/[-\s]/g, "")
    if (cleanIsbn.length !== 10) {
      setResult({ valid: false, message: "ISBN-10 必须是 10 位数字" })
      return
    }

    if (validateIsbn10(cleanIsbn)) {
      setResult({ valid: true, message: "有效的 ISBN-10" })
    } else {
      setResult({ valid: false, message: "无效的 ISBN-10" })
    }
  }

  const handleCalculate = () => {
    const cleanIsbn = isbn.replace(/[-\s]/g, "").slice(0, 9)
    if (cleanIsbn.length !== 9) {
      setResult({ valid: false, message: "请输入前 9 位数字" })
      return
    }

    const digits = cleanIsbn.split("").map((d) => Number.parseInt(d, 10))
    if (digits.some(isNaN)) {
      setResult({ valid: false, message: "只能包含数字" })
      return
    }

    const checkDigit = calculateIsbn10CheckDigit(digits)
    setResult({ valid: true, message: `校验位是: ${checkDigit}` })
    setShowCalculation(true)
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">验证方法 6: 校验位 (Check Digit)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">定义 (Definition)</h3>
        <p className="text-lg text-gray-700">代码中的最后一位数字，用于验证所有其他数字</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">用途</h3>
          <ul className="space-y-4">
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">条形码</p>
                <p className="text-gray-600">用于零售产品</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">ISBN</p>
                <p className="text-gray-600">国际标准书号</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">VIN</p>
                <p className="text-gray-600">车辆识别号</p>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">工作原理 (How It Works)</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </span>
                  <span>使用特定公式从前面的数字计算</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </span>
                  <span>检测数据输入或传输中的错误</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </span>
                  <span>帮助识别伪造或无效的代码</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">示例</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-lg font-medium mb-3">ISBN-10</h4>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <span className="font-mono text-lg">
                      0-306-40615-<span className="bg-yellow-200 px-1">2</span>
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>最后一位数字 (2) 是校验位，由前 9 位数字计算得出。</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-lg font-medium mb-3">UPC 条形码</h4>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-3xl mr-2">📊</span>
                      <span className="font-mono text-lg">
                        72527273070<span className="bg-yellow-200 px-1">7</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>最后一位数字 (7) 是校验位，由前 11 位数字计算得出。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">ISBN-10 校验位演示</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">输入 ISBN-10 (或前 9 位数字)</label>
                <Input
                  value={isbn}
                  onChange={(e) => {
                    setIsbn(e.target.value)
                    setShowCalculation(false)
                  }}
                  placeholder="例如: 0-306-40615-2 或 030640615"
                />
              </div>

              <div className="flex space-x-2">
                <Button onClick={handleCheck} className="flex-1">
                  验证 ISBN
                </Button>
                <Button onClick={handleCalculate} className="flex-1">
                  计算校验位
                </Button>
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

              {showCalculation && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">ISBN-10 校验位计算</h4>
                  <ol className="space-y-2 text-sm">
                    <li>
                      <span className="font-medium">步骤 1:</span> 将前 9 位数字乘以对应的权重 (10,9,8...2)
                    </li>
                    <li>
                      <span className="font-medium">步骤 2:</span> 将结果相加
                    </li>
                    <li>
                      <span className="font-medium">步骤 3:</span> 计算除以 11 的余数
                    </li>
                    <li>
                      <span className="font-medium">步骤 4:</span> 从 11 中减去余数 (如果结果是 10，则使用 X)
                    </li>
                  </ol>
                </div>
              )}
            </div>

            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">校验位的重要性</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">•</span>
                  </span>
                  <span>自动检测输入错误</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">•</span>
                  </span>
                  <span>防止数据传输错误</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">•</span>
                  </span>
                  <span>验证数据的真实性</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">校验位互动活动</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">活动: "代码验证者"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>给学生一些带有校验位的代码（如 ISBN）</li>
              <li>让他们验证这些代码是否有效</li>
              <li>然后让他们尝试计算自己的校验位</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">活动目标</h5>
              <p>理解校验位的工作原理，并能验证和计算校验位。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "校验位计算"</h5>
                <p className="mb-2">材料: 准备一些带校验位的实际代码（ISBN、信用卡号等）</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>展示如何手动计算ISBN-10的校验位</li>
                  <li>让学生尝试计算其他ISBN的校验位</li>
                  <li>故意更改一位数字，展示校验位如何检测错误</li>
                  <li>讨论校验位如何防止常见错误（如数字转置）</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">常见使用校验位的代码</h5>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">ISBN-10</p>
                    <p>
                      例如: 0-306-40615-<span className="bg-yellow-200">2</span>
                    </p>
                    <p className="text-xs text-gray-500">最后一位是校验位，通过前9位计算得出</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">中国身份证号</p>
                    <p>
                      例如: 11010119900307123<span className="bg-yellow-200">X</span>
                    </p>
                    <p className="text-xs text-gray-500">最后一位是校验位，可能是0-9或X</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">信用卡号</p>
                    <p>
                      例如: 4532 0151 5151 212<span className="bg-yellow-200">1</span>
                    </p>
                    <p className="text-xs text-gray-500">使用Luhn算法计算最后一位校验位</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">EAN-13条形码</p>
                    <p>
                      例如: 690123456789<span className="bg-yellow-200">0</span>
                    </p>
                    <p className="text-xs text-gray-500">最后一位是校验位，通过前12位计算得出</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">校验位的实际应用</h5>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <p className="text-sm">超市收银机可以通过条形码的校验位立即检测扫描错误</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <p className="text-sm">银行可以立即验证账号或信用卡号是否有效，无需查询数据库</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <p className="text-sm">图书馆系统可以验证ISBN是否有效，防止录入错误</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <p className="text-sm">政府系统可以快速验证身份证号的有效性</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

