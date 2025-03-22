"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Edit } from "lucide-react"

export default function ScreenCheck() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const handleProceed = () => {
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    setConfirmed(true)
  }

  const handleEdit = () => {
    setShowConfirmation(false)
    setConfirmed(false)
  }

  const handleReset = () => {
    setShowConfirmation(false)
    setConfirmed(false)
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">核实方法 2: 屏幕/视觉检查 (Screen/Visual Check)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">定义 (Definition)</h3>
        <p className="text-lg text-gray-700">用户手动审查输入的数据</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">工作原理 (How It Works)</h3>
          <ol className="space-y-4">
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <p className="text-lg font-medium">数据输入后，系统在屏幕上显示数据</p>
                <p className="text-gray-600">显示所有输入信息的摘要</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <p className="text-lg font-medium">提示用户确认准确性</p>
                <p className="text-gray-600">要求用户审查和验证</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <p className="text-lg font-medium">用户可以与纸质文档比较或依靠记忆</p>
                <p className="text-gray-600">检查信息是否与来源匹配</p>
              </div>
            </li>
          </ol>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">优势 (Advantages)</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </span>
                  <span>实现简单</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </span>
                  <span>不需要额外的数据输入</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </span>
                  <span>用户可以发现明显的错误</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">屏幕检查演示</h3>

            {confirmed ? (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    <p className="text-green-700 font-medium">订单已确认！</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">订单详情:</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">订单号:</span>
                      <span>#12345678</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">总计:</span>
                      <span>¥99.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">送货地址:</span>
                      <span>北京市海淀区123号</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={handleReset} className="w-full">
                  重置演示
                </Button>
              </div>
            ) : showConfirmation ? (
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">请检查您的订单详情:</h4>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">姓名:</span>
                      <span>张三</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">送货地址:</span>
                      <span>北京市海淀区123号</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">电子邮件:</span>
                      <span>zhangsan@example.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">电话:</span>
                      <span>(+86) 123-4567-8910</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">支付方式:</span>
                      <span>尾号为1234的信用卡</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">总计:</span>
                      <span>¥99.99</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-center text-yellow-700">请在继续前检查所有信息是否正确。</p>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button variant="outline" onClick={handleEdit} className="flex items-center">
                    <Edit className="h-4 w-4 mr-2" />
                    编辑信息
                  </Button>
                  <Button onClick={handleConfirm}>确认订单</Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">订单表单</h4>
                  <p className="text-gray-600">假设用户已经填写了订单表单，包括姓名、地址、支付信息等。</p>
                </div>

                <Button onClick={handleProceed} className="w-full">
                  继续下一步
                </Button>
              </div>
            )}

            <div className="mt-6">
              <h4 className="font-semibold mb-3">屏幕检查的好处</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">1</span>
                  </span>
                  <span>捕获打字错误和数据输入错误</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">2</span>
                  </span>
                  <span>在最终确认前给用户审查的机会</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">3</span>
                  </span>
                  <span>减少关键信息中的错误</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">屏幕检查互动游戏</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">游戏: "准确性确认者"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>展示一个已完成的表单</li>
              <li>学生检查错误</li>
              <li>点击找到的每个错误</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">游戏目标</h5>
              <p>培养仔细审查数据的能力，并能发现常见的数据错误。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "错误发现者"</h5>
                <p className="mb-2">材料: 准备一些包含错误的表单确认页面截图</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>展示一个包含多个字段的表单确认页面（如订单确认、注册信息等）</li>
                  <li>页面中故意包含几个错误（如错误的地址、错误的数量等）</li>
                  <li>让学生找出所有错误</li>
                  <li>讨论如果这些错误未被发现会导致什么后果</li>
                  <li>强调在最终提交前进行屏幕检查的重要性</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">屏幕检查的实际应用</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">电子商务</p>
                    <p className="text-xs text-gray-500">订单确认页面</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>商品、数量、价格</p>
                      <p>送货地址、联系方式</p>
                      <p>支付方式、总金额</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">航班预订</p>
                    <p className="text-xs text-gray-500">行程确认页面</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>出发/到达城市和日期</p>
                      <p>航班号、座位类型</p>
                      <p>乘客信息、特殊需求</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">银行转账</p>
                    <p className="text-xs text-gray-500">转账确认页面</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>收款人姓名和账号</p>
                      <p>转账金额和用途</p>
                      <p>手续费和到账时间</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">医疗预约</p>
                    <p className="text-xs text-gray-500">预约确认页面</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>医生姓名和专业</p>
                      <p>预约日期和时间</p>
                      <p>患者信息和症状</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">屏幕检查的最佳实践</h5>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 font-bold text-xs">1</span>
                    </span>
                    <p className="text-sm">使用清晰的布局和分组相关信息</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 font-bold text-xs">2</span>
                    </span>
                    <p className="text-sm">突出显示关键信息（如金额、日期、地址）</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 font-bold text-xs">3</span>
                    </span>
                    <p className="text-sm">提供明确的编辑选项，让用户可以返回修改</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-yellow-600 font-bold text-xs">4</span>
                    </span>
                    <p className="text-sm">使用对比色或图标标记需要特别注意的信息</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

