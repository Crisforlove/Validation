"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertTriangle, Calculator } from "lucide-react"

interface CheckDigitQuestion {
  title: string
  description: string
  value: string
  isValid: boolean
  explanation: string
  calculation: string[]
}

export default function CheckDigitGame() {
  // Game state
  const [gameState, setGameState] = useState<"intro" | "playing" | "feedback" | "result">("intro")
  const [currentRound, setCurrentRound] = useState(0)
  const [score, setScore] = useState(0)
  const [showCalculation, setShowCalculation] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean
    message: string
  } | null>(null)

  // Game questions
  const questions: CheckDigitQuestion[] = [
    {
      title: "ISBN-10检查",
      description: "这个ISBN-10号码是否有效?",
      value: "0-306-40615-2",
      isValid: true,
      explanation: "这是一个有效的ISBN-10号码。最后一位'2'是正确的校验位。",
      calculation: [
        "1. 将前9位数字乘以对应的权重(10到2):",
        "   0×10 + 3×9 + 0×8 + 6×7 + 4×6 + 0×5 + 6×4 + 1×3 + 5×2 = 130",
        "2. 计算130除以11的余数: 130 % 11 = 9",
        "3. 用11减去余数: 11 - 9 = 2",
        "4. 校验位应该是2，与实际值匹配",
      ],
    },
    {
      title: "信用卡号检查",
      description: "这个信用卡号是否有效?",
      value: "4532-0151-5151-2251",
      isValid: false,
      explanation: "这不是一个有效的信用卡号。根据Luhn算法，校验和不能被10整除。",
      calculation: [
        "1. 从右到左，对每个奇数位置的数字乘以2:",
        "   1×2=2, 5×2=10→1, 1×2=2, 5×2=10→1, 1×2=2, 5×2=10→1, 0×2=0, 3×2=6",
        "2. 如果乘积大于9，则减去9:",
        "   2, 1, 2, 1, 2, 1, 0, 6",
        "3. 将所有数字相加:",
        "   2+5+2+1+2+5+1+1+2+5+1+1+2+5+1+3 = 39",
        "4. 39不能被10整除，所以号码无效",
      ],
    },
    {
      title: "中国身份证号检查",
      description: "这个身份证号是否有效?",
      value: "110101199003074258",
      isValid: true,
      explanation: "这是一个有效的身份证号。最后一位'8'是正确的校验位。",
      calculation: [
        "1. 前17位乘以权重因子[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]:",
        "   1×7 + 1×9 + 0×10 + ... + 5×4 + 8×2 = 184",
        "2. 计算184除以11的余数: 184 % 11 = 8",
        "3. 根据余数查表[1,0,X,9,8,7,6,5,4,3,2]得到校验码'8'",
        "4. 校验位应该是8，与实际值匹配",
      ],
    },
    {
      title: "EAN-13条形码检查",
      description: "这个EAN-13条形码是否有效?",
      value: "6923450657713",
      isValid: true,
      explanation: "这是一个有效的EAN-13条形码。最后一位'3'是正确的校验位。",
      calculation: [
        "1. 奇数位置乘以1，偶数位置乘以3:",
        "   6×1 + 9×3 + 2×1 + 3×3 + 4×1 + 5×3 + 0×1 + 6×3 + 5×1 + 7×3 + 7×1 + 1×3 = 107",
        "2. 计算107除以10的余数: 107 % 10 = 7",
        "3. 用10减去余数: 10 - 7 = 3",
        "4. 校验位应该是3，与实际值匹配",
      ],
    },
    {
      title: "UPC-A条形码检查",
      description: "这个UPC-A条形码是否有效?",
      value: "042100005264",
      isValid: false,
      explanation: "这不是一个有效的UPC-A条形码。最后一位校验位应该是3而不是4。",
      calculation: [
        "1. 奇数位置乘以3，偶数位置乘以1:",
        "   0×3 + 4×1 + 2×3 + 1×1 + 0×3 + 0×1 + 0×3 + 0×1 + 5×3 + 2×1 + 6×3 = 37",
        "2. 计算37除以10的余数: 37 % 10 = 7",
        "3. 用10减去余数: 10 - 7 = 3",
        "4. 校验位应该是3，与实际值4不匹配",
      ],
    },
  ]

  // Current question
  const currentQuestion = questions[currentRound]

  // Start game
  const startGame = () => {
    setGameState("playing")
    setCurrentRound(0)
    setScore(0)
    setSelectedAnswer(null)
    setFeedback(null)
    setShowCalculation(false)
  }

  // Select answer
  const handleSelectAnswer = (answer: boolean) => {
    setSelectedAnswer(answer)
  }

  // Submit answer
  const handleSubmit = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.isValid

    setFeedback({
      isCorrect,
      message: isCorrect ? "正确！你正确判断了校验位的有效性。" : "错误！你没有正确判断校验位的有效性。",
    })

    if (isCorrect) {
      setScore(score + 1)
    }

    setGameState("feedback")
  }

  // Toggle calculation
  const toggleCalculation = () => {
    setShowCalculation(!showCalculation)
  }

  // Next round
  const nextRound = () => {
    if (currentRound < questions.length - 1) {
      setCurrentRound(currentRound + 1)
      setSelectedAnswer(null)
      setFeedback(null)
      setGameState("playing")
      setShowCalculation(false)
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
              <h3 className="text-2xl font-bold mb-4">校验位挑战</h3>
              <p className="text-lg mb-4">在这个游戏中，你需要判断包含校验位的编号是否有效。</p>
              <p className="mb-4">校验位是一种错误检测机制，用于验证数据的完整性。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">什么是校验位?</h4>
                <p className="text-sm mb-4">
                  校验位是添加到数据末尾的一个或多个字符，通过对前面的数据进行特定的数学计算得出。
                  它可以用来检测数据输入或传输过程中的错误。
                </p>

                <h4 className="font-bold mb-2">常见的校验位应用:</h4>
                <ul className="text-left list-disc pl-5 space-y-1 text-sm">
                  <li>ISBN图书编号</li>
                  <li>信用卡号码</li>
                  <li>身份证号码</li>
                  <li>条形码</li>
                  <li>银行账号</li>
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
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-center">{currentQuestion.title}</h3>
              <p className="text-lg mb-6 text-center">{currentQuestion.description}</p>

              <div className="max-w-md mx-auto">
                <div className="bg-white p-4 rounded-lg text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">检查以下编号:</p>
                  <p className="text-2xl font-mono font-bold">{currentQuestion.value}</p>
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                  <Button
                    variant={selectedAnswer === true ? "default" : "outline"}
                    onClick={() => handleSelectAnswer(true)}
                    className="w-32"
                  >
                    有效
                  </Button>
                  <Button
                    variant={selectedAnswer === false ? "default" : "outline"}
                    onClick={() => handleSelectAnswer(false)}
                    className="w-32"
                  >
                    无效
                  </Button>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button onClick={toggleCalculation} variant="outline" className="flex items-center">
                    <Calculator className="h-4 w-4 mr-2" />
                    {showCalculation ? "隐藏计算" : "显示计算"}
                  </Button>

                  <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                    提交答案
                  </Button>
                </div>

                {showCalculation && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium mb-2">校验位计算方法:</p>
                    <div className="text-sm space-y-1 font-mono">
                      {currentQuestion.calculation.map((step, index) => (
                        <p key={index} className="whitespace-pre-wrap">
                          {step}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
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

              <h3 className="text-2xl font-bold mb-2">{feedback.isCorrect ? "判断正确！" : "判断错误！"}</h3>

              <p className="text-lg mb-4">{feedback.message}</p>

              <div className="bg-white p-4 rounded-lg inline-block text-left">
                <p className="font-medium">正确答案:</p>
                <p className="text-lg font-bold mt-1">{currentQuestion.isValid ? "有效" : "无效"}</p>
                <p className="mt-2 text-sm">{currentQuestion.explanation}</p>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg max-w-md mx-auto">
                <p className="font-medium mb-2">校验位计算:</p>
                <div className="text-sm space-y-1 font-mono text-left">
                  {currentQuestion.calculation.map((step, index) => (
                    <p key={index} className="whitespace-pre-wrap">
                      {step}
                    </p>
                  ))}
                </div>
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
                    <p>你完全掌握了校验位的概念！</p>
                  </div>
                ) : score >= questions.length * 0.7 ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
                    <p className="text-lg font-bold text-green-700">做得很好！</p>
                    <p>你对校验位有很好的理解！</p>
                  </div>
                ) : score >= questions.length * 0.4 ? (
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="h-16 w-16 text-yellow-500 mb-2" />
                    <p className="text-lg font-bold text-yellow-700">还不错！</p>
                    <p>你对校验位有基本的理解，但还需要更多练习。</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <XCircle className="h-16 w-16 text-red-500 mb-2" />
                    <p className="text-lg font-bold text-red-700">需要改进！</p>
                    <p>建议你重新学习校验位的概念。</p>
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

