"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Eye, EyeOff, Shield } from "lucide-react"

export default function LengthCheckGame() {
  // Game state
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [strength, setStrength] = useState(0)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [gameState, setGameState] = useState<"intro" | "playing" | "success">("intro")

  // Password requirements
  const requirements = [
    { id: "length", label: "至少8个字符", test: (pwd: string) => pwd.length >= 8 },
    { id: "uppercase", label: "至少1个大写字母", test: (pwd: string) => /[A-Z]/.test(pwd) },
    { id: "lowercase", label: "至少1个小写字母", test: (pwd: string) => /[a-z]/.test(pwd) },
    { id: "number", label: "至少1个数字", test: (pwd: string) => /[0-9]/.test(pwd) },
    { id: "special", label: "至少1个特殊字符", test: (pwd: string) => /[^A-Za-z0-9]/.test(pwd) },
  ]

  // Calculate password strength
  useEffect(() => {
    if (!password) {
      setStrength(0)
      return
    }

    let score = 0

    // Check each requirement
    requirements.forEach((req) => {
      if (req.test(password)) {
        score += 20
      }
    })

    setStrength(score)

    // Reset feedback when password changes
    if (submitted) {
      setSubmitted(false)
      setFeedback(null)
    }
  }, [password, submitted])

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Start game
  const startGame = () => {
    setGameState("playing")
    setPassword("")
    setStrength(0)
    setFeedback(null)
    setSubmitted(false)
  }

  // Submit password
  const handleSubmit = () => {
    setSubmitted(true)

    if (strength < 60) {
      setFeedback("密码强度不足！请满足更多的要求。")
      return
    }

    if (strength === 100) {
      setFeedback("太棒了！你创建了一个非常强的密码。")
      setTimeout(() => {
        setGameState("success")
      }, 1500)
    } else {
      setFeedback(`密码强度适中。满足了${Math.floor(strength / 20)}个要求，但可以更强。`)
    }
  }

  // Get strength color
  const getStrengthColor = () => {
    if (strength < 40) return "bg-red-500"
    if (strength < 60) return "bg-orange-500"
    if (strength < 80) return "bg-yellow-500"
    return "bg-green-500"
  }

  // Get strength label
  const getStrengthLabel = () => {
    if (strength === 0) return "无"
    if (strength < 40) return "弱"
    if (strength < 60) return "中"
    if (strength < 80) return "强"
    return "非常强"
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
              <h3 className="text-2xl font-bold mb-4">密码长度与复杂性挑战</h3>
              <p className="text-lg mb-4">在这个游戏中，你需要创建一个强密码，满足长度和复杂性要求。</p>
              <p className="mb-4">强密码对保护你的账户安全至关重要。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">强密码的要求:</h4>
                <ul className="text-left list-disc pl-5 space-y-1">
                  {requirements.map((req) => (
                    <li key={req.id}>{req.label}</li>
                  ))}
                </ul>
              </div>

              <Button size="lg" onClick={startGame} className="mt-4">
                开始挑战
              </Button>
            </div>
          </div>
        )}

        {gameState === "playing" && (
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">创建一个强密码</h3>

              <div className="max-w-md mx-auto space-y-6">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="输入密码"
                    className="pr-10 text-lg"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">密码强度: {getStrengthLabel()}</span>
                    <span className="text-sm">{strength}%</span>
                  </div>
                  <Progress value={strength} className={`h-2 ${getStrengthColor()}`} />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">密码要求:</p>
                  {requirements.map((req) => (
                    <div key={req.id} className="flex items-center">
                      {req.test(password) ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500 mr-2" />
                      )}
                      <span className={req.test(password) ? "text-green-700" : "text-gray-700"}>{req.label}</span>
                    </div>
                  ))}
                </div>

                {feedback && (
                  <div
                    className={`p-3 rounded-lg ${
                      feedback.includes("不足")
                        ? "bg-red-100 text-red-700"
                        : feedback.includes("适中")
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {feedback}
                  </div>
                )}

                <Button onClick={handleSubmit} className="w-full" disabled={!password}>
                  验证密码
                </Button>
              </div>
            </div>
          </div>
        )}

        {gameState === "success" && (
          <div className="space-y-6 text-center">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16 text-green-500" />
              </div>

              <h3 className="text-2xl font-bold mb-4">挑战成功！</h3>

              <p className="text-lg mb-4">恭喜！你成功创建了一个强密码，满足了所有的长度和复杂性要求。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">为什么长度和复杂性很重要:</h4>
                <ul className="text-left list-disc pl-5 space-y-1">
                  <li>更长的密码需要更长的时间来破解</li>
                  <li>混合使用不同类型的字符增加了可能的组合数量</li>
                  <li>复杂的密码更难被猜测或通过"字典攻击"破解</li>
                  <li>长度检查是数据验证的重要组成部分</li>
                </ul>
              </div>

              <div className="flex justify-center mt-6">
                <Button size="lg" onClick={restartGame}>
                  再次挑战
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

