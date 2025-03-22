"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { CheckCircle, XCircle } from "lucide-react"

export default function RangeCheckDemo() {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(100)
  const [currentValue, setCurrentValue] = useState(50)
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState<null | { valid: boolean; message: string }>(null)
  const [attempts, setAttempts] = useState(0)
  const [correctAttempts, setCorrectAttempts] = useState(0)

  // 生成随机范围和值
  const generateRandomExample = () => {
    // 生成随机范围
    const min = Math.floor(Math.random() * 50)
    const max = min + Math.floor(Math.random() * 100) + 50

    // 决定是生成有效值还是无效值 (75%概率生成有效值)
    const generateValid = Math.random() < 0.75

    let value
    if (generateValid) {
      // 生成范围内的值
      value = Math.floor(Math.random() * (max - min + 1)) + min
    } else {
      // 生成范围外的值
      const belowRange = Math.random() < 0.5
      if (belowRange) {
        value = Math.max(0, min - Math.floor(Math.random() * 20) - 1)
      } else {
        value = max + Math.floor(Math.random() * 20) + 1
      }
    }

    setMinValue(min)
    setMaxValue(max)
    setCurrentValue(value)
    setInputValue("")
    setResult(null)
  }

  const checkValue = () => {
    const numValue = Number(inputValue)

    if (isNaN(numValue)) {
      setResult({ valid: false, message: "请输入一个有效的数字" })
      return
    }

    const isValid = numValue >= minValue && numValue <= maxValue

    setAttempts(attempts + 1)
    if (isValid) {
      setCorrectAttempts(correctAttempts + 1)
    }

    setResult({
      valid: isValid,
      message: isValid
        ? `✓ 正确！${numValue} 在 ${minValue} 到 ${maxValue} 的范围内。`
        : `✗ 错误！${numValue} 不在 ${minValue} 到 ${maxValue} 的范围内。`,
    })
  }

  const isInRange = currentValue >= minValue && currentValue <= maxValue

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">范围检查交互演示</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">当前范围和值</h3>
            <div className="flex justify-between mb-2">
              <span>最小值: {minValue}</span>
              <span>最大值: {maxValue}</span>
            </div>
            <div className="h-8 bg-gray-200 rounded-full overflow-hidden relative mb-2">
              <div
                className="absolute inset-y-0 left-0 bg-red-400"
                style={{ width: `${(minValue / (maxValue * 1.5)) * 100}%` }}
              ></div>
              <div
                className="absolute inset-y-0 bg-green-400"
                style={{
                  left: `${(minValue / (maxValue * 1.5)) * 100}%`,
                  width: `${((maxValue - minValue) / (maxValue * 1.5)) * 100}%`,
                }}
              ></div>
              <div
                className="absolute inset-y-0 right-0 bg-red-400"
                style={{ width: `${100 - (maxValue / (maxValue * 1.5)) * 100}%` }}
              ></div>

              <div
                className="absolute top-0 bottom-0 w-4 h-4 bg-white rounded-full shadow border-2 border-blue-500 -ml-2 flex items-center justify-center"
                style={{
                  left: `${(currentValue / (maxValue * 1.5)) * 100}%`,
                  backgroundColor: isInRange ? "#10B981" : "#EF4444",
                  borderColor: isInRange ? "#059669" : "#DC2626",
                }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-red-600">无效</span>
              <span className="text-green-600">有效范围</span>
              <span className="text-red-600">无效</span>
            </div>
            <div className="mt-2 text-center">
              <span className="font-medium">当前值: </span>
              <span className={isInRange ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                {currentValue} {isInRange ? "(有效)" : "(无效)"}
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">判断练习</h3>
            <p className="mb-2">这个值在有效范围内吗？</p>
            <div className="flex space-x-2 mb-4">
              <Input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入一个数字"
                className="flex-1"
              />
              <Button onClick={checkValue}>检查</Button>
            </div>

            {result && (
              <div className={`p-3 rounded-lg ${result.valid ? "bg-green-50" : "bg-red-50"} mb-4`}>
                <div className="flex items-center">
                  {result.valid ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <p className={result.valid ? "text-green-700" : "text-red-700"}>{result.message}</p>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span>正确率: </span>
                <span className="font-bold">{attempts > 0 ? Math.round((correctAttempts / attempts) * 100) : 0}%</span>
                <span className="text-gray-500 ml-2">
                  ({correctAttempts}/{attempts})
                </span>
              </div>
              <Button variant="outline" onClick={generateRandomExample}>
                生成新例子
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">自定义范围</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">最小值</label>
                  <Input type="number" value={minValue} onChange={(e) => setMinValue(Number(e.target.value))} />
                </div>
                <div>
                  <label className="block text-sm mb-1">最大值</label>
                  <Input type="number" value={maxValue} onChange={(e) => setMaxValue(Number(e.target.value))} />
                </div>
                <div>
                  <label className="block text-sm mb-1">当前值: {currentValue}</label>
                  <Slider
                    value={[currentValue]}
                    min={0}
                    max={maxValue * 1.5}
                    step={1}
                    onValueChange={(value) => setCurrentValue(value[0])}
                  />
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">实际应用示例</h3>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">年龄验证</p>
                  <p>有效范围: 18-120岁</p>
                  <p className="text-xs text-gray-500">用于成人网站访问验证</p>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">考试分数</p>
                  <p>有效范围: 0-100分</p>
                  <p className="text-xs text-gray-500">用于学校成绩系统</p>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">温度监控</p>
                  <p>有效范围: -20°C 到 50°C</p>
                  <p className="text-xs text-gray-500">用于气象站数据收集</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

