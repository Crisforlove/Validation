"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function PresenceCheck() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check required fields
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = "姓名为必填项"
    }
    if (!formData.email.trim()) {
      newErrors.email = "电子邮件为必填项"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">验证方法 4: 存在检查 (Presence Check)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">定义 (Definition)</h3>
        <p className="text-lg text-gray-700">确保必填字段有数据输入，不能留空</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">示例</h3>
          <ul className="space-y-4">
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">注册表单中的姓名字段</p>
                <p className="text-gray-600">不能留空</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">购物网站上的送货地址</p>
                <p className="text-gray-600">送货所必需</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">付款信息</p>
                <p className="text-gray-600">完成交易所必需</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">代码示例</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-auto">
              {`OUTPUT "Please enter the value "
REPEAT
 INPUT Value
 IF Value = ""
  THEN
   OUTPUT "*=Required "
 ENDIF
UNTIL Value <> ""`}
            </pre>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">存在检查的重要性</h4>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">•</span>
                  </span>
                  <span>确保收集所有必要信息</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">•</span>
                  </span>
                  <span>防止系统处理不完整数据</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">•</span>
                  </span>
                  <span>提高数据质量和可用性</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">存在检查演示</h3>

            {submitted ? (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    <p className="text-green-700 font-medium">表单提交成功！</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">提交的数据:</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">姓名:</span>
                      <span>{formData.name}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">电子邮件:</span>
                      <span>{formData.email}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">电话:</span>
                      <span>{formData.phone || "(未提供)"}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">留言:</span>
                      <span className="mt-1">{formData.message || "(未提供)"}</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={resetForm} className="w-full">
                  重置表单
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-300" : ""}
                    placeholder="输入您的姓名"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    电子邮件 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-300" : ""}
                    placeholder="输入您的电子邮件"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="输入您的电话号码（可选）"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">留言</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="输入您的留言（可选）"
                    rows={3}
                  />
                </div>

                <div className="text-sm text-gray-600">
                  <span className="text-red-500">*</span> 必填字段
                </div>

                <Button type="submit" className="w-full">
                  提交表单
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">存在检查互动游戏</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">游戏: "表单完成挑战"</h4>
            <ol className="space-y-2 list-decimal pl-5">
              <li>完成一个带有必填字段的表单</li>
              <li>看谁能最快正确完成</li>
              <li>如果必填字段留空，表单将显示错误</li>
            </ol>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium mb-2">游戏目标</h5>
              <p>理解必填字段的概念，并能正确完成表单。</p>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">实时演示: "缺失信息后果"</h5>
                <p className="mb-2">材料: 准备几个包含关键信息缺失的场景卡片</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>展示不同的表单场景（如订购披萨、邮寄包裹、医疗表格）</li>
                  <li>故意省略一些关键信息</li>
                  <li>让学生识别缺失的信息并讨论可能的后果</li>
                  <li>讨论哪些字段应该是必填的，哪些可以是可选的</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">必填字段示例</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">在线购物</p>
                    <p className="text-red-500">必填: 姓名、送货地址、支付信息</p>
                    <p className="text-green-500">可选: 电话号码、优惠码</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">学校注册</p>
                    <p className="text-red-500">必填: 学生姓名、出生日期、家长联系方式</p>
                    <p className="text-green-500">可选: 过敏信息、特殊需求</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">医疗表格</p>
                    <p className="text-red-500">必填: 患者姓名、出生日期、症状</p>
                    <p className="text-green-500">可选: 家族病史、保险信息</p>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">账户注册</p>
                    <p className="text-red-500">必填: 用户名、密码、电子邮件</p>
                    <p className="text-green-500">可选: 头像、个人简介</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">缺失数据的后果</h5>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <p className="text-sm">缺少送货地址 → 包裹无法送达</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <p className="text-sm">缺少联系方式 → 无法通知重要信息</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <p className="text-sm">缺少出生日期 → 年龄验证失败</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </span>
                    <p className="text-sm">缺少付款信息 → 交易无法完成</p>
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

