"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Introduction() {
  const [showMission, setShowMission] = useState(false)

  return (
    <section>
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              数据验证与核实
              <div className="text-2xl mt-1 opacity-80">Data Validation and Verification</div>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              数据侦探学院
              <div className="text-xl mt-1 opacity-80">Data Detective Academy</div>
            </h2>
            <p className="text-xl">成为数据世界的守护者！</p>

            <Button size="lg" variant="secondary" className="mt-6" onClick={() => setShowMission(!showMission)}>
              {showMission ? "隐藏任务" : "显示任务"}
            </Button>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl">🕵️</span>
              </div>
            </div>
          </div>
        </div>

        {showMission && (
          <div className="mt-6 bg-white/20 rounded-lg p-4 animate-fadeIn">
            <h3 className="text-xl font-semibold mb-2">今日任务</h3>
            <p>学习如何检查和确保数据准确性，成为一名数据侦探！</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">为什么需要数据验证和核实？</h2>

            <Tabs defaultValue="school">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="school">学校</TabsTrigger>
                <TabsTrigger value="medical">医疗</TabsTrigger>
                <TabsTrigger value="games">游戏</TabsTrigger>
              </TabsList>

              <TabsContent value="school" className="p-4 bg-red-50 rounded-lg mt-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <span className="text-3xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">学校记录</h3>
                    <p>如果你的学校把你的100%成绩错误地记录为10%会怎样？</p>
                    <div className="mt-2 bg-red-100 rounded-full px-3 py-1 text-red-600 text-sm font-medium inline-block">
                      成绩错误！
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="medical" className="p-4 bg-yellow-50 rounded-lg mt-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <span className="text-3xl">💊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">医疗记录</h3>
                    <p>如果医生输入了错误的药物剂量会怎样？</p>
                    <div className="mt-2 bg-yellow-100 rounded-full px-3 py-1 text-yellow-600 text-sm font-medium inline-block">
                      剂量错误！
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="games" className="p-4 bg-purple-50 rounded-lg mt-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <span className="text-3xl">🎮</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">游戏账户</h3>
                    <p>如果你的游戏账户密码被错误保存会怎样？</p>
                    <div className="mt-2 bg-purple-100 rounded-full px-3 py-1 text-purple-600 text-sm font-medium inline-block">
                      登录错误！
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-center text-blue-600">结论：数据错误会导致各种问题！</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">你将获得的技能</h2>

            <ul className="space-y-4">
              <li className="flex items-center bg-blue-50 p-3 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">识别无效数据</h3>
                  <p className="text-gray-600">发现数据中的错误和问题</p>
                </div>
              </li>

              <li className="flex items-center bg-green-50 p-3 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">使用各种验证方法</h3>
                  <p className="text-gray-600">掌握多种数据验证技术</p>
                </div>
              </li>

              <li className="flex items-center bg-purple-50 p-3 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">确认数据准确性</h3>
                  <p className="text-gray-600">验证数据是否正确无误</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 border border-dashed border-blue-300 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">教师笔记区域</h3>
              <p className="text-gray-600">在此处添加您的自定义例子和笔记</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            理解验证与核实的区别
            <div className="text-lg font-medium text-blue-500 mt-1">Understanding Validation vs. Verification</div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 flex flex-col">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🔍</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-green-700">验证</h3>
              <div className="text-sm font-medium text-center text-green-600 mb-4">Validation</div>
              <p className="text-gray-700 text-center mb-4">
                检查数据是否<span className="font-bold">合理</span>（是否有效）
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-600 italic text-center">就像老师检查你的答案是否在合理范围内</p>
              </div>
              <div className="mt-auto pt-6">
                <div className="border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">例子：</span> 检查年龄输入是否在1-120岁之间
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 flex flex-col">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-blue-700">核实</h3>
              <div className="text-sm font-medium text-center text-blue-600 mb-4">Verification</div>
              <p className="text-gray-700 text-center mb-4">
                确认数据是否<span className="font-bold">正确复制或输入</span>
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-600 italic text-center">就像检查你是否正确抄写了作业题目</p>
              </div>
              <div className="mt-auto pt-6">
                <div className="border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">例子：</span> 双重检查电话号码是否正确输入
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

