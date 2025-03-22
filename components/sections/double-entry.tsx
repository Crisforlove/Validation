"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"

export default function DoubleEntry() {
  const [firstEntry, setFirstEntry] = useState("")
  const [secondEntry, setSecondEntry] = useState("")
  const [result, setResult] = useState<null | { match: boolean; message: string }>(null)

  const handleCheck = () => {
    if (!firstEntry || !secondEntry) {
      setResult({ match: false, message: "请填写两个输入框" })
      return
    }

    if (firstEntry === secondEntry) {
      setResult({ match: true, message: "输入匹配！" })
    } else {
      setResult({ match: false, message: "输入不匹配，请重试" })
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">核实方法 1: 双重输入 (Double Entry)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">定义 (Definition)</h3>
        <p className="text-lg text-gray-700">数据被输入两次，可能由不同的操作员完成</p>
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
                <p className="text-lg font-medium">系统比较两次输入</p>
                <p className="text-gray-600">检查它们是否完全匹配</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <p className="text-lg font-medium">如果不同则显示错误信息</p>
                <p className="text-gray-600">提醒用户不匹配</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <p className="text-lg font-medium">提示重新输入数据</p>
                <p className="text-gray-600">允许纠正错误</p>
              </div>
            </li>
          </ol>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">使用场景</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>银行账号输入</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>密码确认</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>电子邮件地址验证</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>关键财务数据输入</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">双重输入演示</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">第一次输入</label>
                <Input
                  type="text"
                  value={firstEntry}
                  onChange={(e) => setFirstEntry(e.target.value)}
                  placeholder="输入文本"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">第二次输入</label>
                <Input
                  type="text"
                  value={secondEntry}
                  onChange={(e) => setSecondEntry(e.target.value)}
                  placeholder="再次输入相同文本"
                />
              </div>

              <Button onClick={handleCheck} className="w-full">
                检查匹配
              </Button>

              {result && (
                <div className={`p-4 rounded-lg ${result.match ? "bg-green-50" : "bg-red-50"}`}>
                  <div className="flex items-center">
                    {result.match ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mr-2" />
                    )}
                    <p className={result.match ? "text-green-700" : "text-red-700"}>{result.message}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">匹配</h4>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">密码: abc123</p>
                    <p className="font-medium">确认: abc123</p>
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">密码匹配！账户已创建。</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 mb-2">不匹配</h4>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <p className="font-medium">密码: abc123</p>
                    <p className="font-medium">确认: abc124</p>
                  </div>
                </div>
                <p className="text-sm text-red-600 mt-2">密码不匹配！请重试。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">双重输入互动游戏</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">游戏: "精确复制"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>一名学生看到一段文本，口述给另一名学生输入</li>
              <li>然后原学生再次输入，看是否匹配</li>
              <li>系统比较两次输入并显示是否匹配</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">游戏目标</h5>
              <p>理解双重输入的重要性，并体验数据传递过程中可能出现的错误。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "双重输入挑战"</h5>
                <p className="mb-2">材料: 准备一些复杂的数据（如长数字序列、复杂密码等）</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>将学生分成两人一组</li>
                  <li>给第一个学生看一个复杂的数据序列（如"X7q9#2pL5@"）</li>
                  <li>第一个学生记住并输入数据</li>
                  <li>第二个学生在不看第一次输入的情况下，根据相同的原始数据再次输入</li>
                  <li>比较两次输入，看是否匹配</li>
                  <li>讨论双重输入如何捕获记忆或打字错误</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">双重输入的实际应用</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">密码确认</p>
                    <p className="text-xs text-gray-500">几乎所有注册表单都要求输入两次密码</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>密码: ********</p>
                      <p>确认密码: ********</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">银行账号验证</p>
                    <p className="text-xs text-gray-500">转账时需要再次输入账号</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>收款账号: 6225 **** **** 1234</p>
                      <p>确认账号: 6225 **** **** 1234</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">电子邮件确认</p>
                    <p className="text-xs text-gray-500">重要服务注册时需要确认邮箱</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>邮箱: user@example.com</p>
                      <p>确认邮箱: user@example.com</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">数据录入</p>
                    <p className="text-xs text-gray-500">关键数据由两人独立输入并比较</p>
                    <div className="mt-1 p-1 bg-gray-100 rounded text-xs">
                      <p>操作员1: [数据输入]</p>
                      <p>操作员2: [数据输入]</p>
                      <p>系统: [自动比较]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">双重输入的优缺点</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium text-green-600">优点</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>有效捕获打字和记忆错误</li>
                      <li>适用于关键且不常更改的数据</li>
                      <li>实现简单，用户容易理解</li>
                      <li>不需要额外的硬件或软件</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-600">缺点</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>增加了用户输入的工作量</li>
                      <li>可能导致用户体验不佳</li>
                      <li>如果用户复制粘贴，则失去效果</li>
                      <li>不适合频繁更改的数据</li>
                    </ul>
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

