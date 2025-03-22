"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface FormatQuestion {
  title: string
  description: string
  placeholder: string
  pattern: RegExp
  example: string
  explanation: string
}

export default function FormatCheckGame() {
  // Game state
  const [gameState, setGameState] = useState<"intro" | "playing" | "feedback" | "result">("intro")
  const [currentRound, setCurrentRound] = useState(0)
  const [score, setScore] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [feedback, setFeedback] = useState<{
    isValid: boolean
    message: string
    details?: string
  } | null>(null)

  // Game questions
  const questions: FormatQuestion[] = [
    {
      title: "电子邮件地址",
      description: "请输入一个有效的电子邮件地址",
      placeholder: "例如: user@example.com",
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      example: "user@example.com",
      explanation: "电子邮件地址必须包含@符号，并且有有效的域名部分。",
    },
    {
      title: "中国手机号码",
      description: "请输入一个有效的中国手机号码",
      placeholder: "例如: 13812345678",
      pattern: /^1[3-9]\d{9}$/,
      example: "13812345678",
      explanation: "中国手机号码必须是11位数字，并且以1开头，第二位是3-9之间的数字。",
    },
    {
      title: "中国邮政编码",
      description: "请输入一个有效的中国邮政编码",
      placeholder: "例如: 100000",
      pattern: /^\d{6}$/,
      example: "100000",
      explanation: "中国邮政编码必须是6位数字。",
    },
    {
      title: "日期格式",
      description: "请输入一个有效的日期 (YYYY-MM-DD)",
      placeholder: "例如: 2023-08-25",
      pattern: /^\d{4}-\d{2}-\d{2}$/,
      example: "2023-08-25",
      explanation: "日期格式必须是YYYY-MM-DD，其中YYYY是年份，MM是月份，DD是日期。",
    },
    {
      title: "URL地址",
      description: "请输入一个有效的URL地址",
      placeholder: "例如: https://www.example.com",
      pattern: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9._?=&%-]*)*$/,
      example: "https://www.example.com",
      explanation: "URL地址必须包含域名部分，可以选择性地包含协议(http/https)和路径。",
    },
  ]

  // Current question
  const currentQuestion = questions[currentRound]

  // Start game
  const startGame = () => {
    setGameState("playing")
    setCurrentRound(0)
    setScore(0)
    setInputValue("")
    setFeedback(null)
  }

  // Submit answer
  const handleSubmit = () => {
    if (!inputValue && gameState === "playing") {
      setFeedback({
        isValid: false,
        message: "请输入内容！",
      })
      return
    }

    const isValid = currentQuestion.pattern.test(inputValue)

    setFeedback({
      isValid,
      message: isValid
        ? `正确！"${inputValue}"是有效的${currentQuestion.title}格式。`
        : `错误！"${inputValue}"不是有效的${currentQuestion.title}格式。`,
      details: currentQuestion.explanation,
    })

    if (isValid) {
      setScore(score + 1)
    }

    setGameState("feedback")
  }

  // Next round
  const nextRound = () => {
    if (currentRound < questions.length - 1) {
      setCurrentRound(currentRound + 1)
      setInputValue("")
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
              <h3 className="text-2xl font-bold mb-4">格式检查挑战</h3>
              <p className="text-lg mb-4">在这个游戏中，你需要输入符合特定格式要求的数据。</p>
              <p className="mb-4">格式检查是确保数据符合特定模式的重要验证方法。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">格式示例:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="p-2 border rounded">
                    <p className="font-medium">电子邮件</p>
                    <p className="text-sm font-mono">user@example.com</p>
                  </div>
                  <div className="p-2 border rounded">
                    <p className="font-medium">手机号码</p>
                    <p className="text-sm font-mono">13812345678</p>
                  </div>
                  <div className="p-2 border rounded">
                    <p className="font-medium">邮政编码</p>
                    <p className="text-sm font-mono">100000</p>
                  </div>
                  <div className="p-2 border rounded">
                    <p className="font-medium">日期</p>
                    <p className="text-sm font-mono">2023-08-25</p>
                  </div>
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
              <h3 className="text-2xl font-bold mb-2 text-center">{currentQuestion.title}</h3>
              <p className="text-lg mb-6 text-center">{currentQuestion.description}</p>

              <div className="max-w-md mx-auto">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="text-lg"
                  />
                  <Button onClick={handleSubmit}>验证</Button>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">格式示例:</p>
                  <p className="font-mono mt-1">{currentQuestion.example}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {gameState === "feedback" && feedback && currentQuestion && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg text-center ${feedback.isValid ? "bg-green-50" : "bg-red-50"}`}>
              <div className="flex justify-center mb-4">
                {feedback.isValid ? (
                  <CheckCircle className="h-16 w-16 text-green-500" />
                ) : (
                  <XCircle className="h-16 w-16 text-red-500" />
                )}
              </div>

              <h3 className="text-2xl font-bold mb-2">{feedback.isValid ? "格式正确！" : "格式错误！"}</h3>

              <p className="text-lg mb-4">{feedback.message}</p>

              {feedback.details && (
                <div className="bg-white p-4 rounded-lg inline-block">
                  <p className="text-sm">{feedback.details}</p>
                </div>
              )}
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
                    <p>你完全掌握了格式检查的概念！</p>
                  </div>
                ) : score >= questions.length * 0.7 ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
                    <p className="text-lg font-bold text-green-700">做得很好！</p>
                    <p>你对格式检查有很好的理解！</p>
                  </div>
                ) : score >= questions.length * 0.4 ? (
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="h-16 w-16 text-yellow-500 mb-2" />
                    <p className="text-lg font-bold text-yellow-700">还不错！</p>
                    <p>你对格式检查有基本的理解，但还需要更多练习。</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <XCircle className="h-16 w-16 text-red-500 mb-2" />
                    <p className="text-lg font-bold text-red-700">需要改进！</p>
                    <p>建议你重新学习格式检查的概念。</p>
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

