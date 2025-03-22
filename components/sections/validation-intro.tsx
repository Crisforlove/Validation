"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

export default function ValidationIntro() {
  const [showExample, setShowExample] = useState(false)

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-2">验证简介 - 数据的安全检查员</h2>
      <div className="text-lg font-medium text-blue-500 mb-6">
        Validation Introduction - The Safety Checker for Data
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">验证的定义</h3>
        <div className="text-sm font-medium text-blue-600 mb-2">Definition of Validation</div>
        <p className="text-lg text-gray-700">确保输入数据在被系统接受前是合理的</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">验证的工作原理</h3>
          <ul className="space-y-4">
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <p className="text-lg font-medium">自动检查每个数据项</p>
                <p className="text-gray-600">系统会对输入的每一项数据进行检查</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <p className="text-lg font-medium">如果数据无效则拒绝并显示错误信息</p>
                <p className="text-gray-600">告知用户数据有问题</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <p className="text-lg font-medium">允许重新输入数据</p>
                <p className="text-gray-600">给用户机会修正错误</p>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <Button onClick={() => setShowExample(!showExample)} variant="outline" className="w-full">
              {showExample ? "隐藏示例" : "显示示例"}
            </Button>
          </div>
        </div>

        <div>
          {showExample ? (
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">验证示例</h3>

                <div className="space-y-4">
                  <div className="flex items-center bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                    <div>
                      <p className="text-lg font-medium">有效数据</p>
                      <p className="text-gray-600">年龄 = 25</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-50 p-4 rounded-lg">
                    <XCircle className="h-8 w-8 text-red-500 mr-3" />
                    <div>
                      <p className="text-lg font-medium">无效数据</p>
                      <p className="text-gray-600">年龄 = 250 (超出合理范围)</p>
                    </div>
                  </div>

                  <div className="flex items-center bg-red-50 p-4 rounded-lg">
                    <XCircle className="h-8 w-8 text-red-500 mr-3" />
                    <div>
                      <p className="text-lg font-medium">无效数据</p>
                      <p className="text-gray-600">年龄 = "二十五" (类型错误)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">验证流程</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>用户输入数据</li>
                    <li>系统检查数据是否合理</li>
                    <li>如果合理，接受数据</li>
                    <li>如果不合理，显示错误并要求重新输入</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <p className="text-lg text-gray-600">点击"显示示例"查看验证示例</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">验证方法概览</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <p className="font-medium">范围检查</p>
            <p className="text-xs text-blue-600">Range Check</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <p className="font-medium">长度检查</p>
            <p className="text-xs text-green-600">Length Check</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-yellow-600 font-bold">3</span>
            </div>
            <p className="font-medium">类型检查</p>
            <p className="text-xs text-yellow-600">Type Check</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-purple-600 font-bold">4</span>
            </div>
            <p className="font-medium">存在检查</p>
            <p className="text-xs text-purple-600">Presence Check</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-red-600 font-bold">5</span>
            </div>
            <p className="font-medium">格式检查</p>
            <p className="text-xs text-red-600">Format Check</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-indigo-600 font-bold">6</span>
            </div>
            <p className="font-medium">校验位</p>
            <p className="text-xs text-indigo-600">Check Digit</p>
          </div>
        </div>

        <div className="mt-6 p-4 border border-dashed border-blue-300 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-blue-600">教师演示区域</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">实时演示: "数据门卫"</h4>
              <p className="mb-2">材料: 准备一些卡片，上面写着各种数据（有些合理，有些不合理）</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>选择一名学生担任"数据门卫"</li>
                <li>其他学生轮流尝试"通过大门"，展示他们的数据卡片</li>
                <li>"数据门卫"必须决定是否让数据通过（是否合理）</li>
                <li>全班讨论每个决定是否正确</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">视频示例</h4>
              <p>播放一段简短视频，展示当系统接受无效数据时可能发生的问题：</p>
              <ul className="list-disc pl-5 text-sm">
                <li>银行系统接受负数金额的转账</li>
                <li>医疗系统接受不可能的生日日期</li>
                <li>订购系统接受不存在的邮政编码</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">讨论问题</h4>
              <p className="italic">"你能想到哪些因为缺乏数据验证而导致的真实问题？"</p>
              <p className="italic">"如果你正在设计一个学校出勤系统，你会验证哪些数据？"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

