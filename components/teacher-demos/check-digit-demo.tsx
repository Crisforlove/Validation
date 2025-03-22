"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle } from "lucide-react"

export default function CheckDigitDemo() {
  // ISBN-10 校验位
  const [isbn, setIsbn] = useState("")
  const [isbnResult, setIsbnResult] = useState<null | { valid: boolean; message: string }>(null)
  const [isbnCalculation, setIsbnCalculation] = useState<{
    digits: number[]
    weights: number[]
    products: number[]
    sum: number
    remainder: number
    checkDigit: string
  } | null>(null)

  // 信用卡校验位 (Luhn算法)
  const [creditCard, setCreditCard] = useState("")
  const [creditCardResult, setCreditCardResult] = useState<null | { valid: boolean; message: string }>(null)
  const [creditCardCalculation, setCreditCardCalculation] = useState<{
    digits: number[]
    doubled: number[]
    sum: number
    checkDigit: number
  } | null>(null)

  // 校验位游戏
  const [gameInput, setGameInput] = useState("")
  const [gameAnswer, setGameAnswer] = useState<string | null>(null)
  const [gameResult, setGameResult] = useState<null | { correct: boolean; message: string }>(null)
  const [gameScore, setGameScore] = useState({ correct: 0, total: 0 })

  // 验证 ISBN-10
  const validateIsbn10 = () => {
    if (!isbn) {
      setIsbnResult({ valid: false, message: "请输入 ISBN-10" })
      return
    }

    // 清除连字符和空格
    const cleanIsbn = isbn.replace(/[-\s]/g, "")

    if (cleanIsbn.length !== 10) {
      setIsbnResult({ valid: false, message: "ISBN-10 必须是 10 位" })
      return
    }

    // 检查前 9 位是否为数字
    const firstNine = cleanIsbn.substring(0, 9)
    if (!/^\d{9}$/.test(firstNine)) {
      setIsbnResult({ valid: false, message: "ISBN-10 的前 9 位必须是数字" })
      return
    }

    // 检查最后一位是数字或 'X'
    const lastChar = cleanIsbn.charAt(9)
    if (!/^\d$|^X$/i.test(lastChar)) {
      setIsbnResult({ valid: false, message: "ISBN-10 的最后一位必须是数字或 X" })
      return
    }

    // 计算校验位
    const digits = firstNine.split("").map((d) => Number.parseInt(d, 10))
    const weights = Array.from({ length: 9 }, (_, i) => 10 - i)
    const products = digits.map((d, i) => d * weights[i])
    const sum = products.reduce((a, b) => a + b, 0)
    const remainder = sum % 11
    const calculatedCheckDigit = remainder === 0 ? "0" : remainder === 1 ? "X" : (11 - remainder).toString()

    // 保存计算过程
    setIsbnCalculation({
      digits,
      weights,
      products,
      sum,
      remainder,
      checkDigit: calculatedCheckDigit,
    })

    // 检查计算的校验位是否与输入的最后一位匹配
    const lastDigit = lastChar.toUpperCase()
    const isValid = calculatedCheckDigit === lastDigit

    setIsbnResult({
      valid: isValid,
      message: isValid ? "✓ 有效的 ISBN-10" : `✗ 无效的 ISBN-10，正确的校验位应为 ${calculatedCheckDigit}`,
    })
  }

  // 计算 ISBN-10 校验位
  const calculateIsbn10CheckDigit = () => {
    if (!isbn) {
      setIsbnResult({ valid: false, message: "请输入 ISBN 的前 9 位数字" })
      return
    }

    // 清除连字符和空格
    const cleanIsbn = isbn.replace(/[-\s]/g, "")

    // 如果输入了完整的 ISBN-10，只取前 9 位
    const firstNine = cleanIsbn.length >= 10 ? cleanIsbn.substring(0, 9) : cleanIsbn

    if (firstNine.length !== 9) {
      setIsbnResult({ valid: false, message: "请输入恰好 9 位数字" })
      return
    }

    if (!/^\d{9}$/.test(firstNine)) {
      setIsbnResult({ valid: false, message: "所有字符必须是数字" })
      return
    }

    // 计算校验位
    const digits = firstNine.split("").map((d) => Number.parseInt(d, 10))
    const weights = Array.from({ length: 9 }, (_, i) => 10 - i)
    const products = digits.map((d, i) => d * weights[i])
    const sum = products.reduce((a, b) => a + b, 0)
    const remainder = sum % 11
    const checkDigit = remainder === 0 ? "0" : remainder === 1 ? "X" : (11 - remainder).toString()

    // 保存计算过程
    setIsbnCalculation({
      digits,
      weights,
      products,
      sum,
      remainder,
      checkDigit,
    })

    setIsbnResult({
      valid: true,
      message: `ISBN-10 的校验位是: ${checkDigit}`,
    })
  }

  // 验证信用卡号 (使用 Luhn 算法)
  const validateCreditCard = () => {
    if (!creditCard) {
      setCreditCardResult({ valid: false, message: "请输入信用卡号" })
      return
    }

    // 清除空格和连字符
    const cleanCard = creditCard.replace(/[\s-]/g, "")

    if (!/^\d+$/.test(cleanCard)) {
      setCreditCardResult({ valid: false, message: "信用卡号只能包含数字" })
      return
    }

    if (cleanCard.length < 13 || cleanCard.length > 19) {
      setCreditCardResult({ valid: false, message: "信用卡号长度应为 13-19 位" })
      return
    }

    // Luhn 算法
    const digits = cleanCard.split("").map((d) => Number.parseInt(d, 10))
    const checkDigit = digits.pop() || 0
    const reversed = digits.reverse()

    const doubled = reversed.map((d, i) => {
      if (i % 2 === 0) {
        const doubled = d * 2
        return doubled > 9 ? doubled - 9 : doubled
      }
      return d
    })

    const sum = doubled.reduce((a, b) => a + b, 0)
    const calculatedCheckDigit = (10 - (sum % 10)) % 10

    // 保存计算过程
    setCreditCardCalculation({
      digits: reversed,
      doubled,
      sum,
      checkDigit: calculatedCheckDigit,
    })

    const isValid = calculatedCheckDigit === checkDigit

    setCreditCardResult({
      valid: isValid,
      message: isValid ? "✓ 有效的信用卡号" : "✗ 无效的信用卡号",
    })
  }

  // 生成随机 ISBN-9 (前 9 位)
  const generateRandomIsbn9 = () => {
    let isbn9 = ""
    for (let i = 0; i < 9; i++) {
      isbn9 += Math.floor(Math.random() * 10).toString()
    }
    return isbn9
  }

  // 校验位游戏 - 计算校验位
  const calculateGameCheckDigit = () => {
    if (!gameInput) {
      setGameResult({ correct: false, message: "请输入校验位" })
      return
    }

    // 生成随机 ISBN-9 如果还没有
    if (!gameAnswer) {
      const randomIsbn9 = generateRandomIsbn9()
      setGameInput(randomIsbn9)

      // 计算校验位
      const digits = randomIsbn9.split("").map((d) => Number.parseInt(d, 10))
      const weights = Array.from({ length: 9 }, (_, i) => 10 - i)
      const products = digits.map((d, i) => d * weights[i])
      const sum = products.reduce((a, b) => a + b, 0)
      const remainder = sum % 11
      const checkDigit = remainder === 0 ? "0" : remainder === 1 ? "X" : (11 - remainder).toString()

      setGameAnswer(checkDigit)
      setGameResult({ correct: false, message: "请计算校验位" })
      return
    }

    setGameScore({
      correct: gameScore.correct + 1,
      total: gameScore.total + 1,
    })

    setGameResult({
      correct: true,
      message: `✓ 正确！校验位是 ${gameAnswer}`,
    })
  }

  // 生成新的校验位游戏
  const generateNewGame = () => {
    const randomIsbn9 = generateRandomIsbn9()
    setGameInput(randomIsbn9)
    setGameAnswer(null)
    setGameResult(null)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">校验位交互演示</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="isbn">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="isbn">ISBN-10 校验位</TabsTrigger>
            <TabsTrigger value="credit">信用卡校验位</TabsTrigger>
            <TabsTrigger value="game">校验位游戏</TabsTrigger>
          </TabsList>
          
          <TabsContent value="isbn" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">ISBN-10 校验位计算器</h3>
              <p className="text-sm mb-4">ISBN-10 是一种国际标准书号，最后一位是校验位</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入 ISBN-10 或前 9 位数字</label>
                  <div className="flex space-x-2">
                    <Input 
                      value={isbn} 
                      onChange={(e) => setIsbn(e.target.value)}
                      placeholder="例如: 0-306-40615-2 或 030640615"
                      className="flex-1"
                    />
                    <Button onClick={validateIsbn10}>验证</Button>
                    <Button variant="outline" onClick={calculateIsbn10CheckDigit}>
                      计算校验位
                    </Button>
                  </div>
                </div>
                
                {isbnResult && (
                  <div className={`p-3 rounded-lg ${isbnResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {isbnResult.valid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={isbnResult.valid ? "text-green-700" : "text-red-700"}>
                        {isbnResult.message}
                      </p>
                    </div>
                  </div>
                )}
                
                {isbnCalculation && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">计算过程</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">步骤 1:</span> 将前 9 位数字乘以对应的权重 (10,9,8...2)
                        <div className="grid grid-cols-9 gap-1 mt-1">
                          {isbnCalculation.digits.map((digit, i) => (
                            <div key={i} className="bg-blue-50 p-1 text-center rounded">
                              {digit}×{isbnCalculation.weights[i]}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">步骤 2:</span> 计算乘积
                        <div className="grid grid-cols-9 gap-1 mt-1">
                          {isbnCalculation.products.map((product, i) => (
                            <div key={i} className="bg-green-50 p-1 text-center rounded">
                              {product}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">步骤 3:</span> 计算总和
                        <div className="bg-yellow-50 p-1 text-center rounded mt-1">
                          {isbnCalculation.products.join(" + ")} = {isbnCalculation.sum}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">步骤 4:</span> 计算除以 11 的余数
                        <div className="bg-purple-50 p-1 text-center rounded mt-1">
                          {isbnCalculation.sum} ÷ 11 = 余数 {isbnCalculation.remainder}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">步骤 5:</span> 计算校验位 (11 - 余数)
                        <div className="bg-red-50 p-1 text-center rounded mt-1">
                          11 - {isbnCalculation.remainder} = {isbnCalculation.checkDigit}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">ISBN-10 结构</h3>
                <div className="flex items-center justify-center mb-3">
                  <div className="grid grid-cols-10 gap-0">
                    {Array.from({ length: 10 }).map((_, i) => {
                      const bgColor = i < 9 ? "bg-blue-100" : "bg-red-100"
                      const textColor = i < 9 ? "text-blue-700" : "text-red-700"
                      
                      return (
                        <div 
                          key={i} 
                          className={`w-8 h-8 flex items-center justify-center ${bgColor} ${textColor} text-sm border border-white`}
                        >
                          {i < isbn.replace(/[-\s]/g, "").length ? isbn.replace(/[-\s]/g, "")[i] : ""}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-1 bg-blue-50 text-center text-blue-700">
                    前 9 位数字
                  </div>
                  <div className="p-1 bg-red-50 text-center text-red-700">
                    校验位
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">ISBN-10 校验位规则</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">1</span>
                    </span>
                    <span>将前 9 位数字乘以权重 (10,9,8...2)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">2</span>
                    </span>
                    <span>计算乘积之和</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">3</span>
                    </span>
                    <span>计算除以 11 的余数</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">4</span>
                    </span>
                    <span>校验位 = 11 - 余数 (如果结果是 10，则用 X)</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="credit" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">信用卡校验位计算器 (Luhn 算法)</h3>
              <p className="text-sm mb-4">信用卡号的最后一位是校验位，使用 Luhn 算法计算</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">输入信用卡号</label>
                  <div className="flex space-x-2">
                    <Input 
                      value={creditCard} 
                      onChange={(e) => setCreditCard(e.target.value)}
                      placeholder="例如: 4532 0151 5151 2121"
                      className="flex-1"
                    />
                    <Button onClick={validateCreditCard}>验证</Button>
                  </div>
                </div>
                
                {creditCardResult && (
                  <div className={`p-3 rounded-lg ${creditCardResult.valid ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center">
                      {creditCardResult.valid ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <p className={creditCardResult.valid ? "text-green-700" : "text-red-700"}>
                        {creditCardResult.message}
                      </p>
                    </div>
                  </div>
                )}
                
                {creditCardCalculation && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Luhn 算法计算过程</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">步骤 1:</span> 从右向左，对奇数位数字进行加倍
                        <div className="mt-1 p-2 bg-blue-50 rounded">
                          <div className="flex flex-wrap gap-1">
                            {creditCardCalculation.digits.map((digit, i) => (
                              <div 
                                key={i} 
                                className={`p-1 rounded ${i % 2 === 0 ? "bg-yellow-100" : "bg-gray-100"}`}
                              >
                                {digit}
                                {i % 2 === 0 && <span className="text-xs ml-1">×2</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">步骤 2:</span> 如果加倍后大于 9，则减去 9
                        <div className="mt-1 p-2 bg-green-50 rounded">
                          <div className="flex flex-wrap gap-1">
                            {creditCardCalculation.doubled.map((num, i) => (
                              <div key={i} className="p-1 rounded bg-gray-100">
                                {num}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">步骤 3:</span> 计算所有数字的总和
                        <div className="bg-yellow-50 p-1 text-center rounded mt-1">
                          总和 = {creditCardCalculation.sum}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">步骤 4:</span> 计算校验位 (10 - (总和 % 10)) % 10
                        <div className="bg-red-50 p-1 text-center rounded mt-1">
                          校验位 = {creditCardCalculation.checkDigit}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">信用卡类型</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">Visa</p>
                    <p>以 4 开头，长度为 13、16 或 19 位</p>
                    <p className="text-xs text-gray-500">例如: 4532 0151 5151 2121</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">MasterCard</p>
                    <p>以 51-55 开头，长度为 16 位</p>
                    <p className="text-xs text-gray-500">例如: 5412 7534 8765 1234</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">American Express</p>
                    <p>以 34 或 37 开头，长度为 15 位</p>
                    <p className="text-xs text-gray-500">例如: 3412 567890 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">Luhn 算法的应用</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">•</span>
                    </span>
                    <span>信用卡号验证</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">•</span>
                    </span>
                    <span>IMEI 号码 (手机识别码)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">•</span>
                    </span>
                    <span>加拿大社会保险号</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">•</span>
                    </span>
                    <span>部分国家的国民身份证号</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="game" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">校验位计算游戏</h3>
              <p className="text-sm mb-4">尝试计算 ISBN-10 的校验位</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium mb-2">ISBN 前 9 位:</h4>
                  <div className="text-2xl font-bold font-mono text-center mb-4">{gameInput || "点击"新题目"开始"}</div>
                  
                  {!gameAnswer ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm mb-1">计算校验位</label>
                        <div className="flex space-x-2">
                          <Input 
                            placeholder="输入校验位"
                            className="flex-1"
                          />
                          <Button onClick={calculateGameCheckDigit}>提交</Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <p className="text-green-700">
                          正确的校验位是: <span className="font-bold">{gameAnswer}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button onClick={generateNewGame} className="flex-1">
                    新题目
                  </Button>
                </div>
                \
                {gameResult && (
                  <div className={`p-3 rounded-lg ${gameResult.correct ? "bg-green-50" : "bg-blue-50"}`}>
                    <div className="flex items-center">
                      {gameResult.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <span className="h-5 w-5 mr-2"></span>
                      )}
                      <p className={gameResult.correct ? "text-green-700" : "text-blue-700"}>
                        {gameResult.message}
                      </p>
                    </div>
                  </div>
                )}
                
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
              <h3 className="font-medium mb-2">校验位的重要性</h3>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">为什么校验位很重要?</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>自动检测数据输入错误</li>
                    <li>防止数据传输错误</li>
                    <li>验证数据的真实性</li>
                    <li>防止伪造或篡改</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">常见的校验位应用</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>ISBN 和 ISSN (书籍和期刊编号)</li>
                    <li>信用卡号和银行账号</li>
                    <li>条形码 (UPC, EAN)</li>
                    <li>身份证号和护照号</li>
                    <li>产品序列号</li>
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

