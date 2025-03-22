"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Edit } from "lucide-react"

export default function ScreenCheckDemo() {
  // 订单确认
  const [orderForm, setOrderForm] = useState({
    name: "张三",
    address: "北京市海淀区123号",
    phone: "13812345678",
    email: "zhangsan@example.com",
    product: "笔记本电脑",
    quantity: "1",
    price: "5999",
  })
  const [orderStep, setOrderStep] = useState<"form" | "review" | "confirmed">("form")
  const [orderErrors, setOrderErrors] = useState<string[]>([])
  
  // 支付确认
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "6225 7865 1234 5678",
    cardHolder: "张三",
    expiry: "12/25",
    cvv: "123",
    amount: "1000",
  })
  const [paymentStep, setPaymentStep] = useState<"form" | "review" | "confirmed">("form")
  const [showCardDetails, setShowCardDetails] = useState(false)
  
  // 错误查找游戏
  const [gameForm, setGameForm] = useState({
    name: "李明",
    studentId: "S12345678",
    birthDate: "2010-13-45", // 错误的日期
    grade: "5B",
    phone: "138-1234-56789", // 错误的电话号码格式
    email: "liming.example.com", // 错误的电子邮件格式
    address: "上海市浦东新区",
  })
  const [foundErrors, setFoundErrors] = useState<Record<string, boolean>>({})
  const [gameResult, setGameResult] = useState<null | { score: number; message: string }>(null)
  const [gameCompleted, setGameCompleted] = useState(false)

  // 处理订单表单变更
  const handleOrderFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrderForm({ ...orderForm, [name]: value })
  }
  
  // 处理支付表单变更
  const handlePaymentFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentForm({ ...paymentForm, [name]: value })
  }
  
  // 提交订单表单
  const submitOrderForm = () => {
    const errors = []
    
    if (!orderForm.name) errors.push("姓名不能为空")
    if (!orderForm.address) errors.push("地址不能为空")
    if (!orderForm.phone) errors.push("电话不能为空")
    if (!orderForm.email) errors.push("电子邮件不能为空")
    if (!orderForm.product) errors.push("产品不能为空")
    if (!orderForm.quantity || Number.parseInt(orderForm.quantity) <= 0) errors.push("数量必须大于0")
    if (!orderForm.price || Number.parseFloat(orderForm.price) <= 0) errors.push("价格必须大于0")
    
    if (errors.length > 0) {
      setOrderErrors(errors)
      return
    }
    
    setOrderErrors([])
    setOrderStep("review")
  }
  
  // 确认订单
  const confirmOrder = () => {
    setOrderStep("confirmed")
  }
  
  // 编辑订单
  const editOrder = () => {
    setOrderStep("form")
  }
  
  // 重置订单
  const resetOrder = () => {
    setOrderForm({
      name: "张三",
      address: "北京市海淀区123号",
      phone: "13812345678",
      email: "zhangsan@example.com",
      product: "笔记本电脑",
      quantity: "1",
      price: "5999",
    })
    setOrderStep("form")
    setOrderErrors([])
  }
  
  // 提交支付表单
  const submitPaymentForm = () => {
    setPaymentStep("review")
  }
  
  // 确认支付
  const confirmPayment = () => {
    setPaymentStep("confirmed")
  }
  
  // 编辑支付
  const editPayment = () => {
    setPaymentStep("form")
  }
  
  // 重置支付
  const resetPayment = () => {
    setPaymentForm({
      cardNumber: "6225 7865 1234 5678",
      cardHolder: "张三",
      expiry: "12/25",
      cvv: "123",
      amount: "1000",
    })
    setPaymentStep("form")
  }
  
  // 标记错误
  const markError = (field: string) => {
    setFoundErrors({ ...foundErrors, [field]: true })
  }
  
  // 提交错误查找游戏
  const submitErrorGame = () => {
    // 实际错误
    const actualErrors = {
      birthDate: true, // 错误的日期
      phone: true, // 错误的电话号码格式
      email: true, // 错误的电子邮件格式
    }
    
    // 计算得分
    let correctFound = 0
    let incorrectFound = 0
    
    // 检查找到的错误
    Object.entries(foundErrors).forEach(([field, found]) => {
      if (found && actualErrors[field as keyof typeof actualErrors]) {
        correctFound++
      } else if (found && !actualErrors[field as keyof typeof actualErrors]) {
        incorrectFound++
      }
    })
    
    // 检查漏掉的错误
    const missedErrors = Object.entries(actualErrors).filter(
      ([field]) => !foundErrors[field]
    ).length
    
    const totalErrors = Object.keys(actualErrors).length
    const score = Math.round((correctFound / totalErrors) * 100)
    
    let message = ""
    if (score === 100) {
      message = "太棒了！你找到了所有错误！"
    } else if (score >= 70) {
      message = "做得不错！你找到了大部分错误。"
    } else {
      message = "继续努力！你漏掉了一些错误。"
    }
    
    setGameResult({ score, message })
    setGameCompleted(true)
  }
  
  // 重置错误查找游戏
  const resetErrorGame = () => {
    setGameForm({
      name: "李明",
      studentId: "S12345678",
      birthDate: "2010-13-45", // 错误的日期
      grade: "5B",
      phone: "138-1234-56789", // 错误的电话号码格式
      email: "liming.example.com", // 错误的电子邮件格式
      address: "上海市浦东新区",
    })
    setFoundErrors({})
    setGameResult(null)
    setGameCompleted(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">屏幕检查交互演示</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="order">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="order">订单确认</TabsTrigger>
            <TabsTrigger value="payment">支付确认</TabsTrigger>
            <TabsTrigger value="game">错误查找游戏</TabsTrigger>
          </TabsList>
          
          <TabsContent value="order" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">订单确认演示</h3>
              <p className="text-sm mb-4">填写订单信息，然后在提交前检查</p>
              
              {orderStep === "form" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">姓名</label>
                      <Input 
                        name="name"
                        value={orderForm.name} 
                        onChange={handleOrderFormChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">电话</label>
                      <Input 
                        name="phone"
                        value={orderForm.phone} 
                        onChange={handleOrderFormChange}
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-1">地址</label>
                      <Input 
                        name="address"
                        value={orderForm.address} 
                        onChange={handleOrderFormChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">电子邮件</label>
                      <Input 
                        name="email"
                        value={orderForm.email} 
                        onChange={handleOrderFormChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">产品</label>
                      <Input 
                        name="product"
                        value={orderForm.product} 
                        onChange={handleOrderFormChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">数量</label>
                      <Input 
                        name="quantity"
                        type="number"
                        value={orderForm.quantity} 
                        onChange={handleOrderFormChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1">单价 (元)</label>
                      <Input 
                        name="price"
                        type="number"
                        value={orderForm.price} 
                        onChange={handleOrderFormChange}
                      />
                    </div>
                  </div>
                  
                  {orderErrors.length > 0 && (
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-medium text-red-700 mb-2">请修正以下错误:</h4>
                      <ul className="list-disc pl-5 text-sm text-red-600">
                        {orderErrors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button onClick={submitOrderForm} className="w-full">
                    继续下一步
                  </Button>
                </div>
              )}
              
              {orderStep === "review" && (
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-center text-yellow-700 font-medium">
                      请仔细检查以下订单信息是否正确
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium mb-4 text-center">订单详情</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">姓名:</span>
                        <span>{orderForm.name}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">地址:</span>
                        <span>{orderForm.address}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">电话:</span>
                        <span>{orderForm.phone}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">电子邮件:</span>
                        <span>{orderForm.email}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">产品:</span>
                        <span>{orderForm.product}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">数量:</span>
                        <span>{orderForm.quantity}</span>
                      </div>
                      
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">单价:</span>
                        <span>¥{orderForm.price}</span>
                      </div>
                      
                      <div className="flex justify-between font-bold">
                        <span>总计:</span>
                        <span>¥{Number.parseInt(orderForm.quantity) * Number.parseFloat(orderForm.price)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={editOrder} className="flex-1">
                      <Edit className="h-4 w-4 mr-2" />
                      编辑
                    </Button>
                    <Button onClick={confirmOrder} className="flex-1">
                      确认订单
                    </Button>
                  </div>
                </div>
              )}
              
              {orderStep === "confirmed" && (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-4">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h4 className="text-xl font-medium text-center text-green-700 mb-2">
                      订单已确认!
                    </h4>
                    <p className="text-center text-green-600">
                      您的订单已成功提交，订单号: #ORD-{Math.floor(Math.random() * 1000000)}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium mb-4">订单摘要</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>产品:</span>
                        <span>{orderForm.product} x {orderForm.quantity}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>总计:</span>
                        <span>¥{Number.parseInt(orderForm.quantity) * Number.parseFloat(orderForm.price)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button onClick={resetOrder} className="w-full">
                    重置演示
                  </Button>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">屏幕检查的重要性</h3>
              <div className="space-y-2 text-\

