export default function Applications() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">实际应用</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h2 className="text-xl font-bold">学校</h2>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold">•</span>
                </span>
                <span>学生信息系统</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold">•</span>
                </span>
                <span>成绩输入和报告</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold">•</span>
                </span>
                <span>考勤跟踪</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h2 className="text-xl font-bold">游戏</h2>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold">•</span>
                </span>
                <span>账户注册</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold">•</span>
                </span>
                <span>角色创建</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold">•</span>
                </span>
                <span>游戏内购买</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h2 className="text-xl font-bold">日常生活</h2>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 font-bold">•</span>
                </span>
                <span>在线购物</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 font-bold">•</span>
                </span>
                <span>填写表格</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-green-600 font-bold">•</span>
                </span>
                <span>社交媒体资料</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h2 className="text-xl font-bold">关键系统</h2>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold">•</span>
                </span>
                <span>银行和金融机构</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold">•</span>
                </span>
                <span>医院和医疗系统</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold">•</span>
                </span>
                <span>政府机构</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-6">
        <h2 className="text-xl font-bold text-center mb-4">为什么它很重要</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
            </div>
            <p className="text-center text-gray-700">防止代价高昂的错误和财务损失</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🔒</span>
              </div>
            </div>
            <p className="text-center text-gray-700">保护个人和敏感信息</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl">⏱️</span>
              </div>
            </div>
            <p className="text-center text-gray-700">通过防止需要修正的情况节省时间</p>
          </div>
        </div>

        <div className="mt-6 p-4 border border-dashed border-yellow-300 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-yellow-700">教师演示区域</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">实际案例研究</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-white rounded border border-gray-200">
                  <p className="font-medium">医疗数据错误案例</p>
                  <p className="text-xs text-gray-600 mb-1">2001年，一名癌症患者因药物剂量计算错误而死亡</p>
                  <p className="text-xs">
                    医生开了每日剂量，但系统将其理解为每小时剂量，导致患者接受了致命的过量药物。适当的数据验证和核实可能会防止这一悲剧。
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-gray-200">
                  <p className="font-medium">NASA火星气候轨道器</p>
                  <p className="text-xs text-gray-600 mb-1">1999年，一个价值1.25亿美元的航天器在火星大气层中解体</p>
                  <p className="text-xs">
                    原因是一个团队使用英制单位，而另一个团队使用公制单位，没有进行单位转换验证。这个错误导致轨道器进入大气层的角度错误。
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-gray-200">
                  <p className="font-medium">银行转账错误</p>
                  <p className="text-xs text-gray-600 mb-1">2020年，花旗银行错误转账9亿美元</p>
                  <p className="text-xs">
                    由于界面设计问题和缺乏适当的验证检查，银行意外地向债权人发送了全部本金而不是利息。更好的屏幕检查和双重确认可能会防止这一错误。
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-gray-200">
                  <p className="font-medium">选举数据错误</p>
                  <p className="text-xs text-gray-600 mb-1">2000年美国总统选举中的"蝴蝶选票"</p>
                  <p className="text-xs">
                    选票设计混淆导致许多选民错误投票。这表明即使是表单设计也需要验证，以确保用户输入的数据确实是他们想要输入的。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">学生日常生活中的应用</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <div>
                    <p className="text-sm font-medium">在线游戏账户</p>
                    <p className="text-xs">创建强密码并定期更改，使用双重验证保护账户安全</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <div>
                    <p className="text-sm font-medium">社交媒体</p>
                    <p className="text-xs">检查隐私设置，验证分享内容的准确性，避免分享个人敏感信息</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <div>
                    <p className="text-sm font-medium">学校作业</p>
                    <p className="text-xs">提交前检查拼写和语法，验证数学计算，确保引用正确</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <div>
                    <p className="text-sm font-medium">在线购物</p>
                    <p className="text-xs">确认订单详情，检查送货地址，验证支付信息</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">讨论活动</h4>
              <p className="mb-2 text-sm">分组讨论以下问题：</p>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>你能想到哪些因为数据错误而导致的个人经历？</li>
                <li>未来十年，随着技术发展，数据验证和核实会变得更重要还是更不重要？为什么？</li>
                <li>如果你正在设计一个学校管理系统，你会实施哪些验证和核实措施？</li>
                <li>人工智能和自动化如何改变数据验证和核实的方式？</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

