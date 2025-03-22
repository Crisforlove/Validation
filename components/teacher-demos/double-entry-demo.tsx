"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, Eye, EyeOff } from "lucide-react"

export default function DoubleEntryDemo() {
  // 密码确认
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordResult, setPasswordResult] = useState<null | { match: boolean; message: string }>(null)
  const [showPassword, setShowPassword] = useState(false)

  // 银行账号确认
  const [accountNumber, setAccountNumber] = useState("")
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("")
  const [accountResult, setAccountResult] = useState<null | { match: boolean; message: string }>(null)

  // 双重输入游戏
  const [originalText, setOriginalText] = useState("")
  const [enteredText, setEnteredText] = useState("")
  const [gameResult, setGameResult] = useState<null | { match: boolean; message: string; accuracy: number }>(null)
  const [gameMode, setGameMode] = useState<"view" | "enter" | "result">("view")
  const [gameScore, setGameScore] = useState({ correct: 0, total: 0 })

  // 检查密码匹配
  const checkPasswordMatch = () => {
    if (!password || !confirmPassword) {
      setPasswordResult({ match: false, message: "请填写两个密码字段" })
      return
    }

    const isMatch = password === confirmPassword

    setPasswordResult({
      match: isMatch,
      message: isMatch ? "✓ 密码匹配！" : "✗ 密码不匹配，请重试",
    })
  }

  // 检查银行账号匹配
  const checkAccountMatch = () => {
    if (!accountNumber || !confirmAccountNumber) {
      setAccountResult({ match: false, message: "请填写两个账号字段" })
      return
    }

    // 移除空格和连字符进行比较
    const cleanAccount = accountNumber.replace(/[\s-]/g, "")
    const cleanConfirmAccount = confirmAccountNumber.replace(/[\s-]/g, "")

    const isMatch = cleanAccount === cleanConfirmAccount

    setAccountResult({
      match: isMatch,
      message: isMatch ? "✓ 账号匹配！" : "✗ 账号不匹配，请重试",
    })
  }

  // 生成随机文本
  const generateRandomText = () => {
    const texts = [
      "The quick brown fox jumps over the lazy dog.",
      "A journey of a thousand miles begins with a single step.",
      "To be or not to be, that is the question.",
      "All that glitters is not gold.",
      "The early bird catches the worm.",
      "Actions speak louder than words.",
      "Don't count your chickens before they hatch.",
      "A picture is worth a thousand words.",
      "Rome wasn't built in a day.",
      "Practice makes perfect.",
    ]

    const randomIndex = Math.floor(Math.random() * texts.length)
    return texts[randomIndex]
  }

  // 开始双重输入游戏
  const startGame = () => {
    const text = generateRandomText()
    setOriginalText(text)
    setEnteredText("")
    setGameResult(null)
    setGameMode("view")
  }

  // 进入输入模式
  const enterTextMode = () => {
    setGameMode("enter")
  }

  // 检查文本匹配
  const checkTextMatch = () => {
    if (!enteredText) {
      setGameResult({ match: false, message: "请输入文本", accuracy: 0 })
      return
    }

    // 计算匹配度
    let matchCount = 0
    const originalChars = originalText.split("")
    const enteredChars = enteredText.split("")

    for (let i = 0; i < Math.min(originalChars.length, enteredChars.length); i++) {
      if (originalChars[i] === enteredChars[i]) {
        matchCount++
      }
    }

    const accuracy = Math.round((matchCount / originalChars.length) * 100)
    const isMatch = accuracy >= 90

    setGameScore({
      correct: isMatch ? gameScore.correct + 1 : gameScore.correct,
      total: gameScore.total + 1,
    })

    setGameResult({
      match: isMatch,
      message: isMatch ? "✓ 文本匹配度很高！" : "✗ 文本匹配度较低，请重试",
      accuracy,
    })

    setGameMode("result")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">双重输入交互演示</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="password">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="password">密码确认</TabsTrigger>
            <TabsTrigger value="account">银行账号确认</TabsTrigger>
            <TabsTrigger value="game">双重输入游戏</TabsTrigger>
          </TabsList>
          
          <TabsContent value="password" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">密码确认演示</h3>
              <p className="text-sm mb-4">输入相同的密码两次以确保正确</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入密码</label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="输入密码"
                    />
                    <button 
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-1">确认密码</label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      value={confirmPassword} 
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="再次输入相同密码"
                    />
                    <button 
                      type="button"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <Button onClick={checkPasswordMatch} className="w-full">
                  检查匹配
                </Button>
                
                {passwordResult && (
                  <div className={`p-3 rounded-lg ${passwordResult.match ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {passwordResult.match ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={passwordResult.match ? "text-green-700" : "text-red-700"}>
                        {passwordResult.message}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">为什么需要双重输入密码?</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">1</span>
                    </span>
                    <span>防止打字错误</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">2</span>
                    </span>
                    <span>确保用户记住密码</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">3</span>
                    </span>
                    <span>减少密码重置请求</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">密码双重输入最佳实践</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-medium text-green-700">推荐做法 ✓</p>
                    <ul className="list-disc pl-5">
                      <li>使用密码强度指示器</li>
                      <li>提供明确的错误消息</li>
                      <li>允许显示/隐藏密码</li>
                    </ul>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <p className="font-medium text-red-700">避免做法 ✗</p>
                    <ul className="list-disc pl-5">
                      <li>自动填充确认密码字段</li>
                      <li>过于复杂的密码规则</li>
                      <li>不提供视觉反馈</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="account" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">银行账号确认演示</h3>
              <p className="text-sm mb-4">输入相同的银行账号两次以确保正确</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入银行账号</label>
                  <Input 
                    value={accountNumber} 
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="例如: 6225 7865 1234 5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">确认银行账号</label>
                  <Input 
                    value={confirmAccountNumber} 
                    onChange={(e) => setConfirmAccountNumber(e.target.value)}
                    placeholder="再次输入相同账号"
                  />
                </div>
                
                <Button onClick={checkAccountMatch} className="w-full">
                  检查匹配
                </Button>
                
                {accountResult && (
                  <div className={`p-3 rounded-lg ${accountResult.match ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {accountResult.match ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={accountResult.match ? "text-green-700" : "text-red-700"}>
                        {accountResult.message}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">银行账号错误的后果</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <span>资金转入错误账户</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <span>转账延迟或失败</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <span>资金追回困难</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <span>可能导致财务损失</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">银行账号双重输入最佳实践</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-medium text-green-700">推荐做法 ✓</p>
                    <ul className="list-disc pl-5">
                      <li>显示银行名称进行额外验证</li>
                      <li>使用格式化输入框 (自动添加空格)</li>
                      <li>提供收款人信息确认</li>
                    </ul>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <p className="font-medium text-red-700">避免做法 ✗</p>
                    <ul className="list-disc pl-5">
                      <li>允许复制粘贴账号</li>
                      <li>不显示错误位置</li>
                      <li>缺少最终确认步骤</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="game" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">双重输入游戏</h3>
              <p className="text-sm mb-4">记住文本并准确输入，测试双重输入的准确性</p>
              
              <div className="space-y-4">
                {gameMode === "view" && (
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium mb-2">记住这段文本:</h4>
                    <div className="text-lg font-medium p-4 bg-gray-50 rounded-lg mb-4">
                      {originalText || "点击"开始游戏"生成文本"}
                    </div>
                    
                    <Button 
                      onClick={enterTextMode} 
                      className="w-full"
                      disabled={!originalText}
                    >
                      我已记住，开始输入
                    </Button>
                  </div>
                )}
                
                {gameMode === "enter" && (
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium mb-2">请输入您记住的文本:</h4>
                    <textarea
                      value={enteredText}
                      onChange={(e) => setEnteredText(e.target.value)}
                      className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="输入您记住的文本..."
                    ></textarea>
                    
                    <div className="flex justify-end mt-4">\
                      <Button onClick={checkTextMatch}>
                        提交
                      </Button>
                    </div>
                  </div>
                )}
                
                {gameMode === "result" && gameResult && (
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium mb-2">结果:</h4>
                    
                    <div className={`p-3 rounded-lg mb-4 ${gameResult.match ? "bg-green-50" : "bg-red-50"}`}>
                      <div className="flex items-center">
                        {gameResult.match ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <p className={gameResult.match ? "text-green-700" : "text-red-700"}>
                          {gameResult.message}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">原始文本:</h5>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          {originalText}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">您输入的文本:</h5>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          {enteredText}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">准确率:</h5>
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              gameResult.accuracy >= 90 
                                ? "bg-green-500" 
                                : gameResult.accuracy >= 70 
                                  ? "bg-yellow-500" 
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${gameResult.accuracy}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
                          <span>{gameResult.accuracy}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-2">
                  <Button onClick={startGame} className="flex-1">
                    {originalText ? "新游戏" : "开始游戏"}
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">得分:</span>
                    <span className="font-bold text-lg">
                      {gameScore.correct}/{gameScore.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">双重输入的应用场景</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">账户注册</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>密码确认</li>
                    <li>电子邮件确认</li>
                    <li>用户名确认</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">金融交易</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>银行账号确认</li>
                    <li>转账金额确认</li>
                    <li>收款人信息确认</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">数据录入</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>医疗记录</li>
                    <li>学生成绩</li>
                    <li>重要文档</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">系统配置</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>网络设置</li>
                    <li>安全参数</li>
                    <li>用户权限</li>
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

