"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

type DataType = "number" | "string" | "boolean" | "array" | "object" | "null" | "undefined"

interface TypeQuestion {
  value: string
  display: string
  correctType: DataType
  explanation: string
}

export default function TypeCheckGame() {
  // Game state
  const [gameState, setGameState] = useState<"intro" | "playing" | "feedback" | "result">("intro")
  const [currentRound, setCurrentRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedType, setSelectedType] = useState<DataType | null>(null)
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean
    message: string
    explanation: string
  } | null>(null)

  // Game questions
  const questions: TypeQuestion[] = [
    {
      value: "42",
      display: "42",
      correctType: "number",
      explanation: "42是一个数字类型。在JavaScript中，整数和浮点数都属于number类型。",
    },
    {
      value: '"Hello World"',
      display: '"Hello World"',
      correctType: "string",
      explanation: "带引号的文本是字符串类型。字符串可以用单引号、双引号或反引号表示。",
    },
    {
      value: "true",
      display: "true",
      correctType: "boolean",
      explanation: "true是布尔类型的值。布尔类型只有两个可能的值：true和false。",
    },
    {
      value: "[1, 2, 3]",
      display: "[1, 2, 3]",
      correctType: "array",
      explanation: "方括号中的逗号分隔值是数组类型。数组是一种特殊的对象，用于存储有序的数据集合。",
    },
    {
      value: "{ name: 'John', age: 30 }",
      display: "{ name: 'John', age: 30 }",
      correctType: "object",
      explanation: "花括号中的键值对是对象类型。对象用于存储无序的数据集合，通过键来访问值。",
    },
    {
      value: "null",
      display: "null",
      correctType: "null",
      explanation: "null是一个特殊的值，表示一个空值或不存在的对象引用。它是一个原始值。",
    },
    {
      value: "undefined",
      display: "undefined",
      correctType: "undefined",
      explanation: "undefined表示一个变量已声明但尚未赋值，或者访问了对象不存在的属性。",
    },
    {
      value: "3.14159",
      display: "3.14159",
      correctType: "number",
      explanation: "带小数点的数字也是number类型。JavaScript不区分整数和浮点数。",
    },
    {
      value: '""',
      display: '""',
      correctType: "string",
      explanation: "空字符串仍然是字符串类型。它是长度为0的字符串。",
    },
    {
      value: "[]",
      display: "[]",
      correctType: "array",
      explanation: "空数组是数组类型。它是一个不包含任何元素的数组。",
    },
  ]

  // Data type options
  const dataTypes: { type: DataType; label: string; description: string }[] = [
    {
      type: "number",
      label: "数字 (Number)",
      description: "整数或浮点数，如42或3.14",
    },
    {
      type: "string",
      label: "字符串 (String)",
      description: "文本数据，如\"Hello\"或'World'",
    },
    {
      type: "boolean",
      label: "布尔值 (Boolean)",
      description: "逻辑值，只有true或false",
    },
    {
      type: "array",
      label: "数组 (Array)",
      description: "有序数据集合，如[1, 2, 3]",
    },
    {
      type: "object",
      label: "对象 (Object)",
      description: "键值对集合，如{name: 'John'}",
    },
    {
      type: "null",
      label: "空值 (Null)",
      description: "表示空或不存在的值",
    },
    {
      type: "undefined",
      label: "未定义 (Undefined)",
      description: "表示未赋值的变量",
    },
  ]

  // Current question
  const currentQuestion = questions[currentRound]

  // Start game
  const startGame = () => {
    setGameState("playing")
    setCurrentRound(0)
    setScore(0)
    setSelectedType(null)
    setFeedback(null)
  }

  // Select type
  const handleSelectType = (type: DataType) => {
    setSelectedType(type)
  }

  // Submit answer
  const handleSubmit = () => {
    if (!selectedType) return

    const isCorrect = selectedType === currentQuestion.correctType

    setFeedback({
      isCorrect,
      message: isCorrect ? "正确！" : `错误！这不是${dataTypes.find((dt) => dt.type === selectedType)?.label}类型。`,
      explanation: currentQuestion.explanation,
    })

    if (isCorrect) {
      setScore(score + 1)
    }

    setGameState("feedback")
  }

  // Next round
  const nextRound = () => {
    if (currentRound < questions.length - 1) {
      setCurrentRound(currentRound + 1)
      setSelectedType(null)
      setFeedback(null)
      setGameState("playing")
    } else {
      setGameState("result")
    }
  }

  // Restart game
  const restartGame = () => {
    startGame()
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        {gameState === "intro" && (
          <div className="text-center space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">数据类型检查挑战</h3>
              <p className="text-lg mb-4">在这个游戏中，你需要识别不同值的数据类型。</p>
              <p className="mb-4">正确识别数据类型是编程和数据验证的基础。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">数据类型:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {dataTypes.map((dt) => (
                    <div key={dt.type} className="p-2 border rounded">
                      <p className="font-medium">{dt.label}</p>
                      <p className="text-sm text-gray-600">{dt.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Button size="lg" onClick={startGame} className="mt-4">
                开始挑战
              </Button>
            </div>
          </div>
        )}

        {gameState === "playing" && currentQuestion && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">问题</span>
                <span className="font-bold ml-2">
                  {currentRound + 1}/{questions.length}
                </span>
              </div>

              <div>
                <span className="text-sm text-gray-500">得分</span>
                <span className="font-bold ml-2">{score}</span>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">识别数据类型</h3>

              <div className="bg-white p-4 rounded-lg mb-6 text-center">
                <p className="text-sm text-gray-500 mb-1">以下值的数据类型是什么?</p>
                <p className="text-xl font-mono p-2 bg-gray-100 rounded">{currentQuestion.display}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                {dataTypes.map((dt) => (
                  <Button
                    key={dt.type}
                    variant={selectedType === dt.type ? "default" : "outline"}
                    onClick={() => handleSelectType(dt.type)}
                    className="justify-start"
                  >
                    {dt.label}
                  </Button>
                ))}
              </div>

              <div className="flex justify-center">
                <Button onClick={handleSubmit} disabled={!selectedType} size="lg">
                  提交答案
                </Button>
              </div>
            </div>
          </div>
        )}

        {gameState === "feedback" && feedback && currentQuestion && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg text-center ${feedback.isCorrect ? "bg-green-50" : "bg-red-50"}`}>
              <div className="flex justify-center mb-4">
                {feedback.isCorrect ? (
                  <CheckCircle className="h-16 w-16 text-green-500" />
                ) : (
                  <XCircle className="h-16 w-16 text-red-500" />
                )}
              </div>

              <h3 className="text-2xl font-bold mb-2">{feedback.isCorrect ? "类型正确！" : "类型错误！"}</h3>

              <p className="text-lg mb-2">{feedback.message}</p>

              <div className="bg-white p-4 rounded-lg inline-block text-left mt-4">
                <p className="font-medium">正确答案:</p>
                <p className="text-lg font-bold mt-1">
                  {dataTypes.find((dt) => dt.type === currentQuestion.correctType)?.label}
                </p>
                <p className="mt-2 text-sm">{feedback.explanation}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="lg" onClick={nextRound}>
                {currentRound < questions.length - 1 ? "下一题" : "查看结果"}
              </Button>
            </div>
          </div>
        )}

        {gameState === "result" && (
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-bold mb-4">挑战结束！</h3>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg mb-2">你的最终得分:</p>
              <p className="text-5xl font-bold mb-2">
                {score}/{questions.length}
              </p>
              <Progress value={(score / questions.length) * 100} className="h-4 mt-4" />

              <div className="mt-6">
                {score === questions.length ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
                    <p className="text-lg font-bold text-green-700">太棒了！满分！</p>
                    <p>你完全掌握了数据类型的概念！</p>
                  </div>
                ) : score >= questions.length * 0.7 ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
                    <p className="text-lg font-bold text-green-700">做得很好！</p>
                    <p>你对数据类型有很好的理解！</p>
                  </div>
                ) : score >= questions.length * 0.4 ? (
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="h-16 w-16 text-yellow-500 mb-2" />
                    <p className="text-lg font-bold text-yellow-700">还不错！</p>
                    <p>你对数据类型有基本的理解，但还需要更多练习。</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <XCircle className="h-16 w-16 text-red-500 mb-2" />
                    <p className="text-lg font-bold text-red-700">需要改进！</p>
                    <p>建议你重新学习数据类型的概念。</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Button size="lg" onClick={restartGame}>
                再次挑战
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

