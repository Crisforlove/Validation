export default function Summary() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">总结 (Summary)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">验证 (Validation)</h2>
          <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
            <p className="font-medium mb-3">确保数据合理 (Ensuring data is reasonable)</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <span>范围检查 (Range Check)</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <span>长度检查 (Length Check)</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <span>类型检查 (Type Check)</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <span>存在检查 (Presence Check)</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <span>格式检查 (Format Check)</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <span>校验位 (Check Digit)</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-700 mb-2">何时使用验证</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </span>
                  <span>收集任何类型的数据输入时</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </span>
                  <span>在处理或存储数据之前</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </span>
                  <span>防止无效数据进入系统</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">核实 (Verification)</h2>
          <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
            <p className="font-medium mb-3">确保数据准确 (Ensuring data is accurate)</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <span>双重输入 (Double Entry)</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <span>屏幕/视觉检查 (Screen/Visual Check)</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="font-semibold text-yellow-700 mb-2">何时使用核实</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">✓</span>
                  </span>
                  <span>从一个来源复制数据到另一个来源时</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">✓</span>
                  </span>
                  <span>对于关键信息，如财务数据</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">✓</span>
                  </span>
                  <span>在完成重要交易之前</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-700 mb-2">成为数据侦探的提示</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <span>始终检查数据范围</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <span>确认正确的数据格式</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <span>对重要信息使用双重输入</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">•</span>
                  </span>
                  <span>提交前进行视觉检查</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 rounded-lg p-5">
        <h2 className="text-xl font-semibold text-center mb-4">重要性</h2>
        <p className="text-center text-lg">保护系统和用户免受错误数据的影响</p>

        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-3">
                <p className="font-medium">防止错误</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-medium">节省时间</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-medium">保护数据</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 border border-dashed border-blue-300 rounded-lg bg-white">
          <h3 className="text-lg font-semibold mb-2 text-blue-600">教师总结区域</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">课程关键要点</h4>
              <ol className="list-decimal pl-5 text-sm space-y-1">
                <li>数据验证和核实是确保数据质量的两个不同但互补的过程</li>
                <li>验证检查数据是否合理，核实检查数据是否正确输入或复制</li>
                <li>常见的验证方法包括范围检查、长度检查、类型检查、存在检查、格式检查和校验位</li>
                <li>常见的核实方法包括双重输入和屏幕/视觉检查</li>
                <li>这些技术在日常生活、学校、工作和关键系统中都有广泛应用</li>
                <li>良好的数据验证和核实可以防止错误、节省时间和资源、保护个人信息</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">评估活动建议</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">小测验</p>
                  <p className="text-xs">准备一份包含各种验证和核实方法的多选题测验</p>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">设计项目</p>
                  <p className="text-xs">让学生设计一个包含适当验证和核实措施的表单或系统</p>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">案例分析</p>
                  <p className="text-xs">提供一个数据错误导致严重后果的真实案例，让学生分析如何预防</p>
                </div>
                <div className="p-2 bg-white rounded">
                  <p className="font-medium">角色扮演</p>
                  <p className="text-xs">学生扮演系统设计师和用户，展示验证和核实的重要性</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">扩展资源</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">📚</span>
                  </span>
                  <p className="text-sm">推荐阅读: 《数据质量管理入门》、《数据安全最佳实践》</p>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">🎬</span>
                  </span>
                  <p className="text-sm">视频资源: Khan Academy数据验证课程、TED演讲"数据错误的代价"</p>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">🌐</span>
                  </span>
                  <p className="text-sm">网站: W3Schools表单验证教程、数据质量协会资源</p>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">🎮</span>
                  </span>
                  <p className="text-sm">互动游戏: "数据侦探在线挑战"、"验证大师"应用</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">恭喜！</h2>
          <p className="text-xl mb-6">你现在是一名官方数据侦探！</p>

          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-5xl">🕵️</span>
            </div>
          </div>

          <p className="text-lg">记住：防止数据错误比以后修复它们更容易！</p>
        </div>
      </div>
    </section>
  )
}

