"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertTriangle, Search } from "lucide-react"

interface DataItem {
  id: number
  [key: string]: any
}

interface ScreenQuestion {
  title: string
  description: string
  data: DataItem[]
  expectedIds: number[]
  explanation: string
}

export default function ScreenCheckGame() {
  // Game state
  const [gameState, setGameState] = useState<"intro" | "playing" | "feedback" | "result">("intro")
  const [currentRound, setCurrentRound] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean
    message: string
    details: string
  } | null>(null)

  // Game questions
  const questions: ScreenQuestion[] = [
    {
      title: "学生信息筛选",
      description: "筛选出年龄在10-18岁之间的学生",
      data: [
        { id: 1, name: "张三", age: 15, grade: "初三" },
        { id: 2, name: "李四", age: 8, grade: "小二" },
        { id: 3, name: "王五", age: 17, grade: "高二" },
        { id: 4, name: "赵六", age: 20, grade: "大一" },
        { id: 5, name: "钱七", age: 12, grade: "初一" },
      ],
      expectedIds: [1, 3, 5],
      explanation: "年龄在10-18岁之间的学生是张三(15岁)、王五(17岁)和钱七(12岁)。",
    },
    {
      title: "商品库存检查",
      description: "筛选出库存低于10件的商品",
      data: [
        { id: 1, name: "T恤", price: 99, stock: 15 },
        { id: 2, name: "牛仔裤", price: 199, stock: 8 },
        { id: 3, name: "运动鞋", price: 299, stock: 5 },
        { id: 4, name: "背包", price: 159, stock: 12 },
        { id: 5, name: "帽子", price: 59, stock: 3 },
      ],
      expectedIds: [2, 3, 5],
      explanation: "库存低于10件的商品是牛仔裤(8件)、运动鞋(5件)和帽子(3件)。",
    },
    {
      title: "成绩单分析",
      description: "筛选出分数在80分以上的科目",
      data: [
        { id: 1, subject: "语文", score: 85, teacher: "王老师" },
        { id: 2, subject: "数学", score: 92, teacher: "李老师" },
        { id: 3, subject: "英语", score: 78, teacher: "张老师" },
        { id: 4, subject: "物理", score: 88, teacher: "刘老师" },
        { id: 5, subject: "化学", score: 75, teacher: "陈老师" },
      ],
      expectedIds: [1, 2, 4],
      explanation: "分数在80分以上的科目是语文(85分)、数学(92分)和物理(88分)。",
    },
    {
      title: "订单状态检查",
      description: "筛选出已发货但未送达的订单",
      data: [
        { id: 1, product: "手机", status: "已发货", days: 2 },
        { id: 2, product: "电脑", status: "已送达", days: 5 },
        { id: 3, product: "耳机", status: "处理中", days: 0 },
        { id: 4, product: "键盘", status: "已发货", days: 1 },
        { id: 5, product: "鼠标", status: "已送达", days: 3 },
      ],
      expectedIds: [1, 4],
      explanation: "已发货但未送达的订单是手机(2天)和键盘(1天)。",
    },
    {
      title: "用户权限检查",
      description: "筛选出具有管理员权限的用户",
      data: [
        { id: 1, username: "admin", role: "管理员", lastLogin: "2023-08-25" },
        { id: 2, username: "user1", role: "普通用户", lastLogin: "2023-08-24" },
        { id: 3, username: "editor", role: "编辑", lastLogin: "2023-08-23" },
        { id: 4, username: "superadmin", role: "超级管理员", lastLogin: "2023-08-22" },
        { id: 5, username: "guest", role: "访客", lastLogin: "2023-08-21" },
      ],
      expectedIds: [1, 4],
      explanation: "具有管理员权限的用户是admin(管理员)和superadmin(超级管理员)。",
    },
  ]

  // Current question
  const currentQuestion = questions[currentRound]

  // Start game
  const startGame = () => {
    setGameState("playing")
    setCurrentRound(0)
    setScore(0)
    setSelectedIds([])
    setFeedback(null)
  }

  // Toggle selection
  const toggleSelection = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  // Submit answer
  const handleSubmit = () => {
    const isCorrect =
      selectedIds.length === currentQuestion.expectedIds.length &&
      selectedIds.every((id) => currentQuestion.expectedIds.includes(id))

    setFeedback({
      isCorrect,
      message: isCorrect ? "正确！你成功筛选出了所有符合条件的数据。" : "错误！你没有正确筛选出符合条件的数据。",
      details: currentQuestion.explanation,
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
      setSelectedIds([])
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
              <h3 className="text-2xl font-bold mb-4">屏幕检查挑战</h3>
              <p className="text-lg mb-4">在这个游戏中，你需要根据条件筛选出符合要求的数据项。</p>
              <p className="mb-4">屏幕检查是一种在数据显示前进行验证的方法，确保只显示符合条件的数据。</p>

              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">什么是屏幕检查?</h4>
                <p className="text-sm mb-4">
                  屏幕检查是一种在用户界面层面进行的数据验证方法，它确保只有符合特定条件的数据才会显示给用户，
                  有助于提高数据展示的准确性和相关性。
                </p>

                <h4 className="font-bold mb-2">常见应用场景:</h4>
                <ul className="text-left list-disc pl-5 space-y-1 text-sm">
                  <li>搜索结果筛选</li>
                  <li>数据表格过滤</li>
                  <li>库存管理系统</li>
                  <li>用户权限控制</li>
                  <li>内容推荐系统</li>
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
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-medium">数据列表</p>
                    <div className="flex items-center">
                      <Search className="h-4 w-4 mr-1" />
                      <span className="text-sm">{currentQuestion.description}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {currentQuestion.data.map((item) => (
                      <div
                        key={item.id}
                        className={`p-3 rounded flex justify-between items-center cursor-pointer border ${
                          selectedIds.includes(item.id)
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                        onClick={() => toggleSelection(item.id)}
                      >
                        <div>
                          {Object.entries(item).map(([key, value]) => {
                            if (key !== "id") {
                              return (
                                <div key={key} className="flex items-center">
                                  <span className="text-gray-500 text-sm mr-2">{key}:</span>
                                  <span>{String(value)}</span>
                                </div>
                              )
                            }
                            return null
                          })}
                        </div>
                        <div>
                          {selectedIds.includes(item.id) ? (
                            <CheckCircle className="h-5 w-5 text-blue-500" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="font-medium">已选择 {selectedIds.length} 项</p>
                  <p className="text-sm mt-1">点击数据项可以选择或取消选择。选择所有符合条件的项后点击"提交"按钮。</p>
                </div>

                <div className="flex justify-center mt-4">
                  <Button onClick={handleSubmit} disabled={selectedIds.length === 0}>
                    提交筛选结果
                  </Button>
                </div>
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

              <h3 className="text-2xl font-bold mb-2">{feedback.isCorrect ? "筛选正确！" : "筛选错误！"}</h3>

              <p className="text-lg mb-4">{feedback.message}</p>

              <div className="bg-white p-4 rounded-lg inline-block">
                <p className="font-medium">正确答案:</p>
                <p className="text-sm mt-1">{feedback.details}</p>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg max-w-md mx-auto">
                <p className="font-medium">屏幕检查的重要性:</p>
                <p className="text-sm mt-1">
                  屏幕检查确保用户只看到符合特定条件的数据，提高用户体验并减少错误。
                  在实际应用中，这种筛选通常由系统自动完成，但理解其原理有助于设计更好的用户界面和数据展示方式。
                </p>
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
                    <p>你完全掌握了屏幕检查的概念！</p>
                  </div>
                ) : score >= questions.length * 0.7 ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
                    <p className="text-lg font-bold text-green-700">做得很好！</p>
                    <p>你对屏幕检查有很好的理解！</p>
                  </div>
                ) : score >= questions.length * 0.4 ? (
                  <div className="flex flex-col items-center">
                    <AlertTriangle className="h-16 w-16 text-yellow-500 mb-2" />
                    <p className="text-lg font-bold text-yellow-700">还不错！</p>
                    <p>你对屏幕检查有基本的理解，但还需要更多练习。</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <XCircle className="h-16 w-16 text-red-500 mb-2" />
                    <p className="text-lg font-bold text-red-700">需要改进！</p>
                    <p>建议你重新学习屏幕检查的概念。</p>
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

