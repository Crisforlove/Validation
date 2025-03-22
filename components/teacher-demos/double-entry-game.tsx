"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw, Eye, EyeOff } from "lucide-react"

interface DoubleEntryQuestion {
  title: string
  description: string
  placeholder: string
  type: string
  minLength: number
  complexity: "简单" | "中等" | "复杂"
}

export default function DoubleEntryGame() {
  // Game state
  const [gameState, setGameState] = useState<"intro" | "playing" | "feedback" | "result">("intro")
  const [currentRound, setCurrentRound] = useState(0)
  const [score, setScore] = useState(0)
  const [firstEntry, setFirstEntry] = useState("")
  const [secondEntry, setSecondEntry] = useState("")
  const [showSecondEntry, setShowSecondEntry] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [feedback, setFeedback] = useState<{
    isMatch: boolean
    message: string
  } | null>(null)

  // Game questions
  const questions: DoubleEntryQuestion[] = [
    {
      title: "密码确认",
      description: "创建一个新密码并确认",
      placeholder: "输入密码",
      type: "password",
      minLength: 8,
      complexity: "中等",
    },
    {
      title: "电子邮件确认",
      description: "输入你的电子邮件地址并确认",
      placeholder: "输入电子邮件",
      type: "email",
      minLength: 5,
      complexity: "简单",
    },
    {
      title: "银行账号确认",
      description: "输入银行账号并确认",
      placeholder: "输入银行账号",
      type: "text",
      minLength: 10,
      complexity: "复杂",
    },
    {
      title: "身份证号确认",
      description: "输入身份证号并确认",
      placeholder: "输入身份证号",
      type: "text",
      minLength: 18,
      complexity: "复杂",
    },
    {
      title: "手机号码确认",
      description: "输入手机号码并确认",
      placeholder: "输入手机号码",
      type: "tel",
      minLength: 11,
      complexity: "中等",
    },
  ]

  // Current question
  const currentQuestion = questions[currentRound]

  // Start game
  const startGame = () => {
    setGameState("playing")
    setCurrentRound(0)
    setScore(0)
    setFirstEntry("")
    setSecondEntry("")
    setShowSecondEntry(false)
    setShowPassword(false)
    setFeedback(null)
  }

  // Submit first entry
  const submitFirstEntry = () => {
    if (!firstEntry || firstEntry.length < currentQuestion.minLength) {
      return
    }

    setShowSecondEntry(true)
  }

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Submit answer
  const handleSubmit = () => {
    if (!firstEntry || !secondEntry) {
      return
    }

    const isMatch = firstEntry === secondEntry

    setFeedback({
      isMatch,
      message: isMatch ? "匹配成功！两次输入完全一致。" : "匹配失败！两次输入不一致。",
    })

    if (isMatch) {
      setScore(score + 1)
    }

    setGameState("feedback")
  }

  // Reset entries
  const resetEntries = () => {
    setShowSecondEntry(false)
    setSecondEntry("")
  }

  // Next round
  const nextRound = () => {
    if (currentRound < questions.length - 1) {
      setCurrentRound(currentRound + 1)
      setFirstEntry("")
      setSecondEntry("")
      setShowSecondEntry(false)
      setShowPassword(false)
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

  // Get complexity color
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "简单":
        return "bg-green-100 text-green-700"
      case "中等":
        return "bg-yellow-100 text-yellow-700"
      case "复杂":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        {gameState === "intro" && (
          <div className="text-center space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">双重输入挑战</h3>
              <p className="text-lg mb-4">在这个游戏中，你需要两次输入相同的信息来验证其准确性。</p>
              <p className="mb-4">双重输入是一种常用的数据验证方法，特别适用于重要信息的输入。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">什么是双重输入验证?</h4>
                <p className="text-sm mb-4">
                  双重输入验证是一种要求用户两次输入相同信息的方法，通过比较两次输入是否一致来确保信息的准确性。
                  这种方法特别适用于重要或难以输入的信息，如密码、电子邮件地址等。
                </p>

                <h4 className="font-bold mb-2">常见应用场景:</h4>
                <ul className="text-left list-disc pl-5 space-y-1 text-sm">
                  <li>密码创建与确认</li>
                  <li>电子邮件地址验证</li>
                  <li>银行账号输入</li>
                  <li>重要个人信息确认</li>
                  <li>交易金额确认</li>
                </ul>
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

              <div>
                <span className="text-sm text-gray-500 mr-2">难度</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(
                    currentQuestion.complexity,
                  )}`}
                >
                  {currentQuestion.complexity}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-center">{currentQuestion.title}</h3>
              <p className="text-lg mb-6 text-center">{currentQuestion.description}</p>

              <div className="max-w-md mx-auto space-y-4">
                {!showSecondEntry ? (
                  <>
                    <div>
                      <label className="block text-sm mb-1">第一次输入:</label>
                      <div className="relative">
                        {currentQuestion.type === "password" ? (
                          <>
                            <Input
                              type={showPassword ? "text" : "password"}
                              value={firstEntry}
                              onChange={(e) => setFirstEntry(e.target.value)}
                              placeholder={currentQuestion.placeholder}
                              className="pr-10"
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </>
                        ) : (
                          <Input
                            type={currentQuestion.type}
                            value={firstEntry}
                            onChange={(e) => setFirstEntry(e.target.value)}
                            placeholder={currentQuestion.placeholder}
                          />
                        )}
                      </div>

                      {currentQuestion.minLength > 0 && (
                        <p
                          className={`text-xs mt-1 ${
                            firstEntry.length < currentQuestion.minLength ? "text-red-500" : "text-green-500"
                          }`}
                        >
                          最小长度: {firstEntry.length}/{currentQuestion.minLength}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <Button
                        onClick={submitFirstEntry}
                        disabled={!firstEntry || firstEntry.length < currentQuestion.minLength}
                      >
                        继续
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">第一次输入:</p>
                      <p className="font-medium mt-1">
                        {currentQuestion.type === "password" ? "•".repeat(firstEntry.length) : firstEntry}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm mb-1">第二次输入:</label>
                      <div className="relative">
                        {currentQuestion.type === "password" ? (
                          <>
                            <Input
                              type={showPassword ? "text" : "password"}
                              value={secondEntry}
                              onChange={(e) => setSecondEntry(e.target.value)}
                              placeholder={`再次${currentQuestion.placeholder}`}
                              className="pr-10"
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </>
                        ) : (
                          <Input
                            type={currentQuestion.type}
                            value={secondEntry}
                            onChange={(e) => setSecondEntry(e.target.value)}
                            placeholder={`再次${currentQuestion.placeholder}`}
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-2">
                      <Button variant="outline" onClick={resetEntries}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        重新输入
                      </Button>
                      <Button onClick={handleSubmit} disabled={!secondEntry}>
                        提交
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {gameState === "feedback" && feedback && currentQuestion && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg text-center ${feedback.isMatch ? "bg-green-50" : "bg-red-50"}`}>
              <div className="flex justify-center mb-4">
                {feedback.isMatch ? (
                  <CheckCircle className="h-16 w-16 text-green-500" />
                ) : (
                  <XCircle className="h-16 w-16 text-red-500" />
                )}
              </div>

              <h3 className="text-2xl font-bold mb-2">{feedback.isMatch ? "匹配成功！" : "匹配失败！"}</h3>

              <p className="text-lg mb-4">{feedback.message}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm font-medium mb-1">第一次输入:</p>
                  <p className="font-mono bg-gray-50 p-2 rounded break-all">
                    {currentQuestion.type === "password" ? "•".repeat(firstEntry.length) : firstEntry}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm font-medium mb-1">第二次输入:</p>
                  <p className="font-mono bg-gray-50 p-2 rounded break-all">
                    {currentQuestion.type === "password" ? "•".repeat(secondEntry.length) : secondEntry}
                  </p>
                </div>
              </div>

              {!feedback.isMatch && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg max-w-md mx-auto">
                  <p className="font-medium">提示:</p>
                  <p className="text-sm mt-1">
                    双重输入验证要求两次输入完全一致，包括大小写、空格和特殊字符。
                    这种方法可以有效防止输入错误，特别是对于重要信息。
                  </p>
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
                    <p>你完全掌握了双重输入验证的概念！</p>
                  </div>
                ) : score >= questions.length * 0.7 ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
                    <p className="text-lg font-bold text-green-700">做得很好！</p>
                    <p>你对双重输入验证有很好的理解！</p>
                  </div>
                ) : score >= questions.length * 0.4 ? (
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="h-16 w-16 text-yellow-500 mb-2" />
                    <p className="text-lg font-bold text-yellow-700">还不错！</p>
                    <p>你对双重输入验证有基本的理解，但还需要更多练习。</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <XCircle className="h-16 w-16 text-red-500 mb-2" />
                    <p className="text-lg font-bold text-red-700">需要改进！</p>
                    <p>建议你重新学习双重输入验证的概念。</p>
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

