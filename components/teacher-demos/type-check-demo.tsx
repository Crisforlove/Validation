"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function TypeCheckDemo() {
  // 数字类型检查
  const [numberInput, setNumberInput] = useState("")
  const [numberResult, setNumberResult] = useState<null | { valid: boolean; message: string }>(null)

  // 日期类型检查
  const [dateInput, setDateInput] = useState("")
  const [dateResult, setDateResult] = useState<null | { valid: boolean; message: string }>(null)

  // 类型分类游戏
  const [gameInput, setGameInput] = useState("")
  const [gameAnswer, setGameAnswer] = useState<string | null>(null)
  const [gameResult, setGameResult] = useState<null | { correct: boolean; message: string }>(null)
  const [currentExample, setCurrentExample] = useState<{
    value: string
    type: "number" | "text" | "date" | "boolean" | "email"
    description: string
  }>({
    value: "42",
    type: "number",
    description: "整数",
  })
  const [score, setScore] = useState({ correct: 0, total: 0 })

  // 检查数字类型
  const checkNumber = () => {
    if (!numberInput) {
      setNumberResult({ valid: false, message: "请输入值" })
      return
    }

    // 检查是否为有效数字
    const isValid = !isNaN(Number(numberInput)) && numberInput.trim() !== ""

    setNumberResult({
      valid: isValid,
      message: isValid ? `✓ 有效的数字: ${numberInput}` : `✗ 无效的数字。"${numberInput}" 不是一个数字`,
    })
  }

  // 检查日期类型
  const checkDate = () => {
    if (!dateInput) {
      setDateResult({ valid: false, message: "请输入日期" })
      return
    }

    // 检查是否为有效日期格式 (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(dateInput)) {
      setDateResult({
        valid: false,
        message: `✗ 无效的日期格式。应为 YYYY-MM-DD 格式`,
      })
      return
    }

    // 检查是否为有效日期
    const date = new Date(dateInput)
    const isValid = !isNaN(date.getTime())

    // 检查月份和日期是否有效
    const [year, month, day] = dateInput.split("-").map(Number)
    const isValidMonth = month >= 1 && month <= 12

    // 获取指定月份的最后一天
    const lastDayOfMonth = new Date(year, month, 0).getDate()
    const isValidDay = day >= 1 && day <= lastDayOfMonth

    if (!isValidMonth) {
      setDateResult({
        valid: false,
        message: `✗ 无效的月份。月份必须在 1-12 之间`,
      })
      return
    }

    if (!isValidDay) {
      setDateResult({
        valid: false,
        message: `✗ 无效的日期。${month} 月最多有 ${lastDayOfMonth} 天`,
      })
      return
    }

    setDateResult({
      valid: isValid,
      message: isValid ? `✓ 有效的日期: ${dateInput}` : `✗ 无效的日期`,
    })
  }

  // 生成新的类型分类游戏示例
  const generateNewExample = () => {
    const examples = [
      { value: "42", type: "number", description: "整数" },
      { value: "3.14159", type: "number", description: "浮点数" },
      { value: "-273.15", type: "number", description: "负数" },
      { value: "1,000,000", type: "text", description: "带逗号的数字文本" },
      { value: "Hello, World!", type: "text", description: "普通文本" },
      { value: "user@example.com", type: "email", description: "电子邮件地址" },
      { value: "2023-08-24", type: "date", description: "ISO 格式日期" },
      { value: "24/08/2023", type: "text", description: "非标准格式日期文本" },
      { value: "true", type: "boolean", description: "布尔值" },
      { value: "false", type: "boolean", description: "布尔值" },
      { value: "yes", type: "text", description: "文本，不是布尔值" },
      { value: "12:30:45", type: "text", description: "时间文本" },
      { value: "123-45-6789", type: "text", description: "格式化ID文本" },
      { value: "0xFF", type: "text", description: "十六进制文本" },
    ] as const

    const randomIndex = Math.floor(Math.random() * examples.length)
    setCurrentExample(examples[randomIndex])
    setGameInput("")
    setGameAnswer(null)
    setGameResult(null)
  }

  // 检查类型分类游戏答案
  const checkGameAnswer = () => {
    if (!gameInput) {
      setGameResult({ correct: false, message: "请选择一个类型" })
      return
    }

    const isCorrect = gameInput === currentExample.type

    setScore({
      correct: isCorrect ? score.correct + 1 : score.correct,
      total: score.total + 1,
    })

    setGameResult({
      correct: isCorrect,
      message: isCorrect
        ? `✓ 正确！"${currentExample.value}" 是 ${currentExample.type} 类型`
        : `✗ 错误！"${currentExample.value}" 不是 ${gameInput} 类型，而是 ${currentExample.type} 类型`,
    })

    setGameAnswer(currentExample.type)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">类型检查交互演示</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="game">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="number">数字类型检查</TabsTrigger>
            <TabsTrigger value="date">日期类型检查</TabsTrigger>
            <TabsTrigger value="game">类型分类游戏</TabsTrigger>
          </TabsList>

          <TabsContent value="number" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">数字类型检查器</h3>
              <p className="text-sm mb-4">检查输入值是否为有效的数字</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入值</label>
                  <div className="flex space-x-2">
                    <Input
                      value={numberInput}
                      onChange={(e) => setNumberInput(e.target.value)}
                      placeholder="例如: 42, 3.14, -10"
                      className="flex-1"
                    />
                    <Button onClick={checkNumber}>检查</Button>
                  </div>
                </div>

                {numberResult && (
                  <div className={`p-3 rounded-lg ${numberResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {numberResult.valid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={numberResult.valid ? "text-green-700" : "text-red-700"}>{numberResult.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">有效的数字示例</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>整数</span>
                    <span className="font-medium">42, -10, 0</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>小数</span>
                    <span className="font-medium">3.14, -0.5, 2.718</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>科学计数法</span>
                    <span className="font-medium">1e3, 2.5e-2</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">无效的数字示例</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>包含字母</span>
                    <span className="font-medium">"42a", "ten"</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>特殊格式</span>
                    <span className="font-medium">"1,000", "$50"</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>多个小数点</span>
                    <span className="font-medium">"3.14.15"</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="date" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">日期类型检查器</h3>
              <p className="text-sm mb-4">检查输入值是否为有效的日期 (YYYY-MM-DD 格式)</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入日期</label>
                  <div className="flex space-x-2">
                    <Input
                      value={dateInput}
                      onChange={(e) => setDateInput(e.target.value)}
                      placeholder="例如: 2023-08-24"
                      className="flex-1"
                    />
                    <Button onClick={checkDate}>检查</Button>
                  </div>
                </div>

                {dateResult && (
                  <div className={`p-3 rounded-lg ${dateResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {dateResult.valid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={dateResult.valid ? "text-green-700" : "text-red-700"}>{dateResult.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">有效的日期示例</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>标准日期</span>
                    <span className="font-medium">2023-08-24</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>闰年2月</span>
                    <span className="font-medium">2024-02-29</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>月末日期</span>
                    <span className="font-medium">2023-04-30</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">无效的日期示例</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>错误格式</span>
                    <span className="font-medium">24/08/2023, 2023.08.24</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>无效月份</span>
                    <span className="font-medium">2023-13-01</span>
                  </div>
                  <div className="p-2 bg-white rounded flex justify-between">
                    <span>无效日期</span>
                    <span className="font-medium">2023-02-30, 2023-04-31</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="game" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">类型分类游戏</h3>
              <p className="text-sm mb-4">判断下面的值是什么数据类型</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                  <h4 className="font-medium mb-2">当前值:</h4>
                  <div className="text-2xl font-bold mb-2">"{currentExample.value}"</div>
                  {gameAnswer && <p className="text-sm text-gray-500">({currentExample.description})</p>}
                </div>

                <div>
                  <label className="block text-sm mb-2">选择数据类型:</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <Button
                      variant={gameInput === "number" ? "default" : "outline"}
                      onClick={() => setGameInput("number")}
                      className="text-sm"
                    >
                      数字 (Number)
                    </Button>
                    <Button
                      variant={gameInput === "text" ? "default" : "outline"}
                      onClick={() => setGameInput("text")}
                      className="text-sm"
                    >
                      文本 (Text)
                    </Button>
                    <Button
                      variant={gameInput === "date" ? "default" : "outline"}
                      onClick={() => setGameInput("date")}
                      className="text-sm"
                    >
                      日期 (Date)
                    </Button>
                    <Button
                      variant={gameInput === "boolean" ? "default" : "outline"}
                      onClick={() => setGameInput("boolean")}
                      className="text-sm"
                    >
                      布尔值 (Boolean)
                    </Button>
                    <Button
                      variant={gameInput === "email" ? "default" : "outline"}
                      onClick={() => setGameInput("email")}
                      className="text-sm"
                    >
                      电子邮件 (Email)
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button onClick={checkGameAnswer} className="flex-1">
                    提交答案
                  </Button>
                  <Button variant="outline" onClick={generateNewExample}>
                    下一题
                  </Button>
                </div>

                {gameResult && (
                  <div className={`p-3 rounded-lg ${gameResult.correct ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {gameResult.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={gameResult.correct ? "text-green-700" : "text-red-700"}>{gameResult.message}</p>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">得分:</span>
                    <span className="font-bold text-lg">
                      {score.correct}/{score.total} (
                      {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">数据类型特征</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-2 bg-white rounded">
                  <p className="font-medium text-blue-600">数字 (Number)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>只包含数字、小数点或负号</li>
                    <li>可以进行数学运算</li>
                    <li>例如: 42, 3.14, -10</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium text-green-600">文本 (Text)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>可以包含任何字符</li>
                    <li>用于存储名称、描述等</li>
                    <li>例如: "Hello", "John Doe"</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium text-purple-600">日期 (Date)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>特定格式的时间点</li>
                    <li>可以计算日期差异</li>
                    <li>例如: 2023-08-24</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium text-yellow-600">布尔值 (Boolean)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>只有两个可能值: true/false</li>
                    <li>用于条件判断</li>
                    <li>例如: true, false</li>
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

