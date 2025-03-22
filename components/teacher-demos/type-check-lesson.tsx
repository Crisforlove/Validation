"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function TypeCheckLesson() {
  const [activeTab, setActiveTab] = useState("teacher")

  // 类型检查器状态
  const [inputValue, setInputValue] = useState("")
  const [selectedType, setSelectedType] = useState<"number" | "date" | "text" | "boolean">("number")
  const [checkResult, setCheckResult] = useState<null | { valid: boolean; message: string }>(null)

  // 类型分类游戏状态
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

  // 挑战问题状态
  const [challengeAnswer1, setChallengeAnswer1] = useState("")
  const [challengeAnswer2, setChallengeAnswer2] = useState("")
  const [showAnswer1, setShowAnswer1] = useState(false)
  const [showAnswer2, setShowAnswer2] = useState(false)

  // 检查输入值类型
  const checkType = () => {
    if (!inputValue) {
      setCheckResult({ valid: false, message: "请输入值" })
      return
    }

    let isValid = false
    let message = ""

    switch (selectedType) {
      case "number":
        isValid = !isNaN(Number(inputValue)) && inputValue.trim() !== ""
        message = isValid ? `✓ "${inputValue}" 是有效的数字` : `✗ "${inputValue}" 不是有效的数字`
        break

      case "date":
        // 检查是否为有效日期格式 (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(inputValue)) {
          isValid = false
          message = `✗ "${inputValue}" 不是有效的日期格式 (YYYY-MM-DD)`
        } else {
          // 检查是否为有效日期
          const date = new Date(inputValue)
          isValid = !isNaN(date.getTime())

          // 检查月份和日期是否有效
          const [year, month, day] = inputValue.split("-").map(Number)
          const isValidMonth = month >= 1 && month <= 12

          // 获取指定月份的最后一天
          const lastDayOfMonth = new Date(year, month, 0).getDate()
          const isValidDay = day >= 1 && day <= lastDayOfMonth

          if (!isValidMonth) {
            isValid = false
            message = `✗ "${inputValue}" 包含无效的月份。月份必须在 1-12 之间`
          } else if (!isValidDay) {
            isValid = false
            message = `✗ "${inputValue}" 包含无效的日期。${month} 月最多有 ${lastDayOfMonth} 天`
          } else if (isValid) {
            message = `✓ "${inputValue}" 是有效的日期`
          } else {
            message = `✗ "${inputValue}" 不是有效的日期`
          }
        }
        break

      case "boolean":
        const boolValues = ["true", "false", "1", "0", "yes", "no"]
        isValid = boolValues.includes(inputValue.toLowerCase())
        message = isValid ? `✓ "${inputValue}" 可以解释为布尔值` : `✗ "${inputValue}" 不能解释为布尔值`
        break

      case "text":
        // 文本总是有效的
        isValid = true
        message = `✓ "${inputValue}" 是有效的文本`
        break
    }

    setCheckResult({ valid: isValid, message })
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
              <CardTitle>实时演示: "数据类型检测器"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">材料:</h3>
                <p>准备各种不同类型的数据示例</p>

                <h3 className="font-medium mt-4 mb-2">演示步骤:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>展示不同类型的数据（数字、文本、日期、布尔值等）</li>
                  <li>讨论每种数据类型的特征和用途</li>
                  <li>演示如何识别和验证不同的数据类型</li>
                  <li>展示类型错误可能导致的问题</li>
                  <li>讨论类型检查在编程和数据处理中的重要性</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">教学提示:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>使用实际例子说明不同数据类型的用途</li>
                  <li>解释类型检查如何防止数据处理错误</li>
                  <li>讨论强类型和弱类型语言的区别</li>
                  <li>展示类型转换的概念和潜在问题</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">互动活动:</h3>
                <p className="mb-2">让学生尝试"类型检查器":</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">选择要检查的数据类型:</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Button
                        variant={selectedType === "number" ? "default" : "outline"}
                        onClick={() => setSelectedType("number")}
                        className="text-sm"
                      >
                        数字 (Number)
                      </Button>
                      <Button
                        variant={selectedType === "date" ? "default" : "outline"}
                        onClick={() => setSelectedType("date")}
                        className="text-sm"
                      >
                        日期 (Date)
                      </Button>
                      <Button
                        variant={selectedType === "boolean" ? "default" : "outline"}
                        onClick={() => setSelectedType("boolean")}
                        className="text-sm"
                      >
                        布尔值 (Boolean)
                      </Button>
                      <Button
                        variant={selectedType === "text" ? "default" : "outline"}
                        onClick={() => setSelectedType("text")}
                        className="text-sm"
                      >
                        文本 (Text)
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-1">输入值进行检查:</label>
                    <div className="flex space-x-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={`输入一个${selectedType === "number" ? "数字" : selectedType === "date" ? "日期 (YYYY-MM-DD)" : selectedType === "boolean" ? "布尔值" : "文本"}`}
                        className="flex-1"
                      />
                      <Button onClick={checkType}>检查</Button>
                    </div>
                  </div>

                  {checkResult && (
                    <div className={`p-3 rounded-lg ${checkResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                      <div className="flex items-center">
                        {checkResult.valid ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <p className={checkResult.valid ? "text-green-700" : "text-red-700"}>{checkResult.message}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="font-medium mb-2">类型分类游戏:</h3>
                  <p className="mb-2">判断下面的值是什么数据类型:</p>

                  <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                    <h4 className="font-medium mb-2">当前值:</h4>
                    <div className="text-2xl font-bold mb-2">"{currentExample.value}"</div>
                    {gameAnswer && <p className="text-sm text-gray-500">({currentExample.description})</p>}
                  </div>

                  <div className="mt-4">
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

                  <div className="flex space-x-2 mt-4">
                    <Button onClick={checkGameAnswer} className="flex-1">
                      提交答案
                    </Button>
                    <Button variant="outline" onClick={generateNewExample}>
                      下一题
                    </Button>
                  </div>

                  {gameResult && (
                    <div className={`p-3 rounded-lg mt-4 ${gameResult.correct ? "bg-green-50" : "bg-red-50"}`}>
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

                  <div className="bg-gray-50 p-3 rounded-lg mt-4">
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
                  <h3 className="font-medium mb-2">数字 (Number)</h3>
                  <p className="text-sm mb-2">特征: 只包含数字、小数点或负号，可以进行数学运算</p>

                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 rounded">
                      <p className="font-medium text-green-700">有效示例 ✓</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>42 (整数)</li>
                        <li>3.14159 (小数)</li>
                        <li>-273.15 (负数)</li>
                        <li>1e6 (科学计数法)</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-red-50 rounded">
                      <p className="font-medium text-red-700">无效示例 ✗</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>"42" (引号中的数字是文本)</li>
                        <li>1,000 (包含逗号)</li>
                        <li>$50 (包含货币符号)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">日期 (Date)</h3>
                  <p className="text-sm mb-2">特征: 表示特定的时间点，可以计算时间差异</p>

                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 rounded">
                      <p className="font-medium text-green-700">有效示例 ✓</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>2023-08-24 (ISO格式)</li>
                        <li>2023-02-28 (有效日期)</li>
                        <li>2024-02-29 (闰年)</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-red-50 rounded">
                      <p className="font-medium text-red-700">无效示例 ✗</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>2023/08/24 (格式不符)</li>
                        <li>2023-13-01 (无效月份)</li>
                        <li>2023-02-30 (无效日期)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">布尔值 (Boolean)</h3>
                  <p className="text-sm mb-2">特征: 表示真/假两种状态，用于条件判断</p>

                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 rounded">
                      <p className="font-medium text-green-700">有效示例 ✓</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>true</li>
                        <li>false</li>
                        <li>1 (在某些上下文中)</li>
                        <li>0 (在某些上下文中)</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-red-50 rounded">
                      <p className="font-medium text-red-700">无效示例 ✗</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>"true" (引号中的是文本)</li>
                        <li>2 (不是标准布尔值)</li>
                        <li>yes (在大多数编程语言中)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">文本 (Text)</h3>
                  <p className="text-sm mb-2">特征: 可以包含任何字符，用于存储名称、描述等</p>

                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 rounded">
                      <p className="font-medium text-green-700">示例</p>
                      <ul className="list-disc pl-5 text-sm">
                        <li>"Hello, World!"</li>
                        <li>"张三"</li>
                        <li>"123" (数字形式的文本)</li>
                        <li>"true" (布尔形式的文本)</li>
                      </ul>
                    </div>
                    <div className="p-2 bg-blue-50 rounded">
                      <p className="font-medium text-blue-700">注意</p>
                      <p className="text-sm">几乎任何内容都可以作为文本存储，但处理时需要注意类型转换</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>类型检查的实际应用</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">表单验证</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>确保年龄输入为数字</li>
                    <li>验证电子邮件格式</li>
                    <li>检查日期输入是否有效</li>
                    <li>验证电话号码只包含数字</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">数据处理</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>确保可以对数字进行计算</li>
                    <li>正确处理日期比较和计算</li>
                    <li>根据布尔值执行条件逻辑</li>
                    <li>防止类型错误导致的程序崩溃</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">数据库操作</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>确保数据符合数据库字段类型</li>
                    <li>防止SQL注入攻击</li>
                    <li>优化查询性能</li>
                    <li>维护数据一致性</li>
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
                <h3 className="font-medium mb-2">问题1: 类型错误</h3>
                <p className="mb-4">
                  "如果一个系统期望接收数字，但实际接收到的是数字形式的文本(如"42")，可能会发生什么问题？"
                </p>

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
                      <p>当系统期望数字但收到数字形式的文本时，可能发生以下问题:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>计算错误 - 尝试进行数学运算时可能失败或产生意外结果</li>
                        <li>类型错误 - 在强类型语言中可能抛出类型错误异常</li>
                        <li>字符串连接而非数学加法 - "42" + "10" 会得到 "4210" 而非 52</li>
                        <li>比较问题 - "42" > "100" 为真，因为字符串比较是按字典顺序</li>
                        <li>函数调用失败 - 需要数字参数的函数可能无法正常工作</li>
                      </ul>
                      <p className="mt-2">
                        解决方案是在处理前进行类型检查和转换，确保数据类型符合预期。例如，使用 parseInt() 或
                        parseFloat() 将文本转换为数字。
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">问题2: 类型安全</h3>
                <p className="mb-4">"为什么现代编程语言越来越强调类型安全？类型安全有什么好处？"</p>

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
                      <p>现代编程语言强调类型安全的好处:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>错误早期发现 - 在编译时而非运行时发现类型错误</li>
                        <li>代码可靠性 - 减少因类型不匹配导致的运行时错误</li>
                        <li>自动文档化 - 类型声明作为代码的一部分，提高可读性</li>
                        <li>更好的IDE支持 - 提供更准确的代码补全和错误检查</li>
                        <li>性能优化 - 编译器可以基于类型信息进行优化</li>
                        <li>重构安全 - 更改代码时，类型系统可以帮助发现潜在问题</li>
                      </ul>
                      <p className="mt-2">
                        即使在动态类型语言中，也越来越多地采用类型注解和类型检查工具(如TypeScript对JavaScript)，以获得类型安全的好处，同时保持语言的灵活性。
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">扩展思考</h3>
                <p className="mb-2">思考以下场景中的类型检查重要性:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>医疗系统中的患者数据</li>
                  <li>银行交易系统</li>
                  <li>航空控制系统</li>
                  <li>社交媒体平台</li>
                </ul>
                <p className="mt-2">对于每个场景，考虑:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>哪些数据需要严格的类型检查？</li>
                  <li>类型错误可能导致什么后果？</li>
                  <li>如何在系统设计中防止类型错误？</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

