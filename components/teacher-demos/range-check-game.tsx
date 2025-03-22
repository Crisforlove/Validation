"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react"

type GameState = "intro" | "playing" | "feedback" | "result"

interface RangeQuestion {
  title: string
  description: string
  min: number
  max: number
  unit: string
  placeholder: string
  timeLimit: number // in seconds
}

export default function RangeCheckGame() {
  // Game state
  const [gameState, setGameState] = useState<GameState>("intro")
  const [currentRound, setCurrentRound] = useState(0)
  const [score, setScore] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [timeLeft, setTimeLeft] = useState(0)
  const [feedback, setFeedback] = useState<{
    isValid: boolean
    message: string
    details?: string
  } | null>(null)

  // Game questions
  const questions: RangeQuestion[] = [
    {
      title: "温度范围",
      description: "请输入一个正常人体温度范围内的值",
      min: 36.3,
      max: 37.3,
      unit: "°C",
      placeholder: "例如: 36.8",
      timeLimit: 15,
    },
    {
      title: "年龄范围",
      description: "请输入一个中国法定工作年龄范围内的值",
      min: 16,
      max: 60,
      unit: "岁",
      placeholder: "例如: 25",
      timeLimit: 10,
    },
    {
      title: "pH值范围",
      description: "请输入一个中性pH值范围内的值",
      min: 6.5,
      max: 7.5,
      unit: "",
      placeholder: "例如: 7.0",
      timeLimit: 12,
    },
    {
      title: "学生成绩",
      description: "请输入一个及格的考试成绩",
      min: 60,
      max: 100,
      unit: "分",
      placeholder: "例如: 75",
      timeLimit: 8,
    },
    {
      title: "网络延迟",
      description: "请输入一个良好网络连接的延迟值",
      min: 1,
      max: 100,
      unit: "ms",
      placeholder: "例如: 30",
      timeLimit: 10,
    },
  ]

  // Current question
  const currentQuestion = questions[currentRound]

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer as NodeJS.Timeout)
            handleTimeout()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [gameState, timeLeft])

  // Start game
  const startGame = () => {
    setGameState("playing")
    setCurrentRound(0)
    setScore(0)
    setInputValue("")
    setFeedback(null)
    setTimeLeft(questions[0].timeLimit)
  }

  // Handle timeout
  const handleTimeout = () => {
    setFeedback({
      isValid: false,
      message: "时间到！你没有及时回答。",
      details: `有效范围是 ${currentQuestion.min} - ${currentQuestion.max} ${currentQuestion.unit}`,
    })
    setGameState("feedback")
  }

  // Submit answer
  const handleSubmit = () => {
    if (!inputValue && gameState === "playing") {
      setFeedback({
        isValid: false,
        message: "请输入一个值！",
      })
      return
    }

    const numValue = Number.parseFloat(inputValue)

    if (isNaN(numValue)) {
      setFeedback({
        isValid: false,
        message: "请输入一个有效的数字！",
      })
      return
    }

    const isInRange = numValue >= currentQuestion.min && numValue <= currentQuestion.max

    setFeedback({
      isValid: isInRange,
      message: isInRange
        ? `正确！${numValue} ${currentQuestion.unit}在有效范围内。`
        : `错误！${numValue} ${currentQuestion.unit}不在有效范围内。`,
      details: `有效范围是 ${currentQuestion.min} - ${currentQuestion.max} ${currentQuestion.unit}`,
    })

    if (isInRange) {
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
      setTimeLeft(questions[currentRound + 1].timeLimit)
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
              <h3 className="text-2xl font-bold mb-4">范围检查挑战</h3>
              <p className="text-lg mb-4">在这个游戏中，你需要输入符合特定范围要求的数据。</p>
              <p className="mb-2">每个问题都有一个有效的数值范围和时间限制。</p>
              <p className="mb-4">你需要在时间结束前输入一个在有效范围内的值。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">游戏规则:</h4>
                <ul className="text-left list-disc pl-5 space-y-1">
                  <li>每个问题都有特定的有效范围</li>
                  <li>在时间限制内输入你的答案</li>
                  <li>答案必须是在有效范围内的数值</li>
                  <li>每个正确答案得1分</li>
                </ul>
              </div>

              <Button size="lg" onClick={startGame} className="mt-4">
                开始游戏
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

              <div className="flex items-center">
                <Clock className="h-4 w-4 text-red-500 mr-2" />
                <span className={`font-bold ${timeLeft <= 5 ? "text-red-500" : ""}`}>{timeLeft}秒</span>
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
                  <Button onClick={handleSubmit}>提交</Button>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-1">时间剩余:</p>
                  <Progress value={(timeLeft / currentQuestion.timeLimit) * 100} className="h-2" />
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

              <h3 className="text-2xl font-bold mb-2">{feedback.isValid ? "范围正确！" : "范围错误！"}</h3>

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
            <h3 className="text-2xl font-bold mb-4">游戏结束！</h3>

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
                    <p>你完全掌握了范围检查的概念！</p>
                  </div>
                ) : score >= questions.length * 0.7 ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
                    <p className="text-lg font-bold text-green-700">做得很好！</p>
                    <p>你对范围检查有很好的理解！</p>
                  </div>
                ) : score >= questions.length * 0.4 ? (
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="h-16 w-16 text-yellow-500 mb-2" />
                    <p className="text-lg font-bold text-yellow-700">还不错！</p>
                    <p>你对范围检查有基本的理解，但还需要更多练习。</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <XCircle className="h-16 w-16 text-red-500 mb-2" />
                    <p className="text-lg font-bold text-red-700">需要改进！</p>
                    <p>建议你重新学习范围检查的概念。</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Button size="lg" onClick={restartGame}>
                再玩一次
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

