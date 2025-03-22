"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"

export default function RangeCheck() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<null | { valid: boolean; message: string }>(null)
  const [minValue, setMinValue] = useState("1")
  const [maxValue, setMaxValue] = useState("100")

  const handleCheck = () => {
    const numValue = Number(value)
    const min = Number(minValue)
    const max = Number(maxValue)

    if (isNaN(numValue)) {
      setResult({ valid: false, message: "请输入一个数字" })
    } else if (numValue < min || numValue > max) {
      setResult({ valid: false, message: `数值必须在 ${min} 到 ${max} 之间` })
    } else {
      setResult({ valid: true, message: `有效数值: ${numValue}` })
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-2">验证方法 1: 范围检查</h2>
      <div className="text-lg font-medium text-blue-500 mb-6">Validation Method 1: Range Check</div>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">定义</h3>
        <div className="text-sm font-medium text-blue-600 mb-2">Definition</div>
        <p className="text-lg text-gray-700">检查数值是否在指定的上限和下限范围内</p>
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
                <p className="text-lg font-medium">学生成绩</p>
                <p className="text-gray-600">必须在0-100之间</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">年龄</p>
                <p className="text-gray-600">必须在1-120之间</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">月份</p>
                <p className="text-gray-600">必须在1-12之间</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">代码示例</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              {`REPEAT
 INPUT Value
 IF Value < MinimumValue OR Value > MaximumValue
  THEN
   OUTPUT "The value should be in the range", MinimumValue ," to ", MaximumValue
 ENDIF
UNTIL Value >= MinimumValue AND Value <= MaximumValue`}
            </pre>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">范围检查演示</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">最小值</label>
                  <Input type="number" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">最大值</label>
                  <Input type="number" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">输入一个值进行检查</label>
                <div className="flex space-x-2">
                  <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="输入一个数字" />
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

            <div className="mt-6">
              <h4 className="font-semibold mb-3">范围可视化</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative">
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-red-400"></div>
                  <div className="absolute inset-y-0 left-1/4 right-1/4 bg-green-400"></div>
                  <div className="absolute inset-y-0 right-0 w-1/4 bg-red-400"></div>

                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center shadow text-xs font-bold">
                      {minValue}
                    </div>
                    <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center shadow text-xs font-bold">
                      {maxValue}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-red-600">无效</span>
                  <span className="text-green-600">有效范围</span>
                  <span className="text-red-600">无效</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">范围检查互动游戏</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">游戏: "在范围内"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>老师喊出一个范围（例如，0-10）</li>
              <li>学生喊出一个数字</li>
              <li>系统（老师）判断它是否在范围内</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">游戏目标</h5>
              <p>理解数值范围的概念，并能快速判断一个数值是否在给定范围内。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "范围猜测游戏"</h5>
                <p className="mb-2">材料: 准备一些常见数据类型的合理范围卡片</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>展示一种数据类型（如年龄、温度、考试分数）</li>
                  <li>学生猜测该数据类型的合理范围</li>
                  <li>记录最低和最高猜测值</li>
                  <li>讨论为什么某些值不合理（如年龄为-5或200）</li>
                  <li>揭示实际使用的合理范围</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实际例子</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">人体温度</p>
                    <p>合理范围: 35°C - 42°C</p>
                    <p className="text-xs text-gray-500">（低于35°C可能是体温过低，高于42°C几乎不可能生存）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">学生年龄</p>
                    <p>合理范围: 5 - 18岁</p>
                    <p className="text-xs text-gray-500">（针对K-12学校系统）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">月份</p>
                    <p>合理范围: 1 - 12</p>
                    <p className="text-xs text-gray-500">（日历系统）</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">百分比</p>
                    <p>合理范围: 0 - 100</p>
                    <p className="text-xs text-gray-500">（在某些特殊情况下可能超过100%）</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">挑战问题</h5>
                <p className="italic">"如果一个学生在系统中输入了150岁的年龄，会发生什么问题？"</p>
                <p className="italic">"为什么ATM机不允许取款金额为负数？"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

