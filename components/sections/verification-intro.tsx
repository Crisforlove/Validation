export default function VerificationIntro() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">核实简介 (Verification Introduction) - 数据的双重检查员</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">核实的定义 (Definition of Verification)</h3>
        <p className="text-lg text-gray-700">确保数据从一个来源准确地复制到另一个来源</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">为什么需要核实</h3>
          <ul className="space-y-4">
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">人为输入错误</p>
                <p className="text-gray-600">人在打字时会犯错误</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">传输过程中的问题</p>
                <p className="text-gray-600">数据在传输过程中可能被损坏</p>
              </div>
            </li>

            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">确保重要数据的准确性</p>
                <p className="text-gray-600">关键信息必须正确</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">验证与核实的区别 (Validation vs. Verification)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-700 mb-2">验证 (Validation)</h4>
                <p className="text-sm">检查数据是否合理且有意义</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">核实 (Verification)</h4>
                <p className="text-sm">检查数据是否正确复制或输入</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">核实过程</h3>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔄</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">原始数据</h3>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="font-mono">账号: 12345678</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">↓</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">数据输入</h3>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="font-mono">账号: 12345678</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">↓</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">核实</h3>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-600 font-bold">✓</span>
                      </span>
                      <p className="font-mono">数据匹配！账号已验证。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-center">核实方法</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p className="font-medium">双重输入 (Double Entry)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <p className="font-medium">屏幕/视觉检查 (Screen/Visual Check)</p>
              </div>
            </div>

            <div className="mt-6 p-4 border border-dashed border-blue-300 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">教师演示区域</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">实时演示: "传话游戏"</h4>
                  <p className="mb-2">材料: 准备一些包含数字和文本的复杂信息</p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    <li>将学生排成一排</li>
                    <li>向第一个学生展示一条包含数字和文本的信息（如电话号码、地址等）</li>
                    <li>让信息通过耳语传递到最后一个学生</li>
                    <li>比较原始信息和最终信息，展示数据传输中可能出现的错误</li>
                    <li>讨论如何通过核实避免这些错误</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">核实的重要性</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">!</span>
                      </span>
                      <p className="text-sm">银行转账错误可能导致资金损失</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">!</span>
                      </span>
                      <p className="text-sm">医疗记录错误可能导致错误治疗</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">!</span>
                      </span>
                      <p className="text-sm">学生成绩记录错误可能影响升学</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">!</span>
                      </span>
                      <p className="text-sm">订单信息错误可能导致错误配送</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">验证与核实的区别演示</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="p-2 bg-white rounded">
                      <p className="font-medium text-green-600">验证示例</p>
                      <p>检查年龄是否在1-120之间</p>
                      <p>检查电子邮件是否包含@符号</p>
                      <p>检查密码是否至少8个字符</p>
                    </div>
                    <div className="p-2 bg-white rounded">
                      <p className="font-medium text-blue-600">核实示例</p>
                      <p>重新输入密码以确认匹配</p>
                      <p>确认订单前查看订单摘要</p>
                      <p>付款前确认金额和收款人</p>
                    </div>
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

