export default function Challenge() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">数据侦探挑战 (Data Detective Challenge)</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-3">综合挑战 (Comprehensive Challenge)</h3>
        <p className="text-lg text-gray-700">设置一个包含各种潜在错误的数据场景</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">要查找的错误类型 (Types of Errors to Find)</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <p className="text-lg font-medium">范围错误 (Range Errors)</p>
                  <p className="text-gray-600">超出可接受限制的值</p>
                  <p className="text-sm text-red-600 mt-1">例如: 年龄 = 150 岁</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <div>
                  <p className="text-lg font-medium">长度错误 (Length Errors)</p>
                  <p className="text-gray-600">文本太长或太短</p>
                  <p className="text-sm text-orange-600 mt-1">例如: 电话号码位数过多</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <div>
                  <p className="text-lg font-medium">类型错误 (Type Errors)</p>
                  <p className="text-gray-600">使用了错误的数据类型</p>
                  <p className="text-sm text-yellow-600 mt-1">例如: 数字字段中的字母</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <p className="text-lg font-medium">缺失数据 (Missing Data)</p>
                  <p
                    className="text
-gray-600"
                  >
                    必填字段留空
                  </p>
                  <p className="text-sm text-green-600 mt-1">例如: 未提供姓名</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <div>
                  <p className="text-lg font-medium">格式错误 (Format Errors)</p>
                  <p className="text-gray-600">数据不符合要求的模式</p>
                  <p className="text-sm text-blue-600 mt-1">例如: 没有 @ 符号的电子邮件</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">挑战</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🕵️</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-center mb-4">学生扮演"数据侦探"查找所有错误</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-2">挑战场景</h4>
                <p className="text-gray-700">
                  您的学校正在建立一个新的学生数据库，但有些数据存在错误。作为数据侦探，您的工作是在系统上线前找出并修复所有错误！
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-2">如何玩</h4>
                <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                  <li>组成 2-3 名学生的团队</li>
                  <li>每个团队收到一份包含各种错误的数据表</li>
                  <li>识别所有错误并解释哪种验证或核实方法可以捕获它们</li>
                  <li>在最短时间内找到最多错误的团队获胜！</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-700 mb-2">额外加分</h4>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>正确识别错误类型</li>
                  <li>为每个错误提出正确的修复方法</li>
                  <li>解释哪种验证或核实方法可以防止错误</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-center">挑战示例</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">学生数据表</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">字段</th>
                    <th className="text-left py-2">值</th>
                    <th className="text-left py-2">错误类型</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">学生 ID</td>
                    <td className="py-2">S12345</td>
                    <td className="py-2 text-green-600">无错误</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">姓名</td>
                    <td className="py-2"></td>
                    <td className="py-2 text-red-600">缺失数据</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">年龄</td>
                    <td className="py-2">150</td>
                    <td className="py-2 text-red-600">范围错误</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">班级</td>
                    <td className="py-2">5B</td>
                    <td className="py-2 text-green-600">无错误</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">电话</td>
                    <td className="py-2">123-45678</td>
                    <td className="py-2 text-red-600">长度错误</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">电子邮件</td>
                    <td className="py-2">student.example.com</td>
                    <td className="py-2 text-red-600">格式错误</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 border border-dashed border-blue-300 rounded-lg">
            <h4 className="font-semibold mb-3 text-blue-600">教师演示区域</h4>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">数据侦探挑战活动</h5>
                <p className="mb-2">材料: 准备学生数据表、错误查找工作表、侦探徽章</p>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>将学生分成3-4人的小组</li>
                  <li>每组分配一份"学生数据库"表格，其中包含各种类型的错误</li>
                  <li>学生必须找出所有错误，标记错误类型，并提出修复方案</li>
                  <li>限时30分钟完成挑战</li>
                  <li>完成后，各组展示他们发现的错误和解决方案</li>
                  <li>颁发"数据侦探"徽章给表现最好的小组</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">挑战数据表示例</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="border border-blue-200 p-1">学生ID</th>
                        <th className="border border-blue-200 p-1">姓名</th>
                        <th className="border border-blue-200 p-1">年龄</th>
                        <th className="border border-blue-200 p-1">班级</th>
                        <th className="border border-blue-200 p-1">电话</th>
                        <th className="border border-blue-200 p-1">电子邮件</th>
                        <th className="border border-blue-200 p-1">出生日期</th>
                        <th className="border border-blue-200 p-1">成绩</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-blue-200 p-1">S12345</td>
                        <td className="border border-blue-200 p-1"></td>
                        <td className="border border-blue-200 p-1">150</td>
                        <td className="border border-blue-200 p-1">5B</td>
                        <td className="border border-blue-200 p-1">123-45678</td>
                        <td className="border border-blue-200 p-1">student.example.com</td>
                        <td className="border border-blue-200 p-1">2010-13-45</td>
                        <td className="border border-blue-200 p-1">95%</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 p-1">S12346</td>
                        <td className="border border-blue-200 p-1">李明</td>
                        <td className="border border-blue-200 p-1">十二</td>
                        <td className="border border-blue-200 p-1">6A</td>
                        <td className="border border-blue-200 p-1">13812345678</td>
                        <td className="border border-blue-200 p-1">liming@example.com</td>
                        <td className="border border-blue-200 p-1">2011-05-20</td>
                        <td className="border border-blue-200 p-1">105</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-200 p-1">S12345</td>
                        <td className="border border-blue-200 p-1">王芳</td>
                        <td className="border border-blue-200 p-1">11</td>
                        <td className="border border-blue-200 p-1">5B</td>
                        <td className="border border-blue-200 p-1">+86-138-1234-5678</td>
                        <td className="border border-blue-200 p-1">wangfang@example.com</td>
                        <td className="border border-blue-200 p-1">2012-06-31</td>
                        <td className="border border-blue-200 p-1">85</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  表中包含多种错误：缺失数据、范围错误、类型错误、格式错误、重复ID等
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">评分标准</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">错误识别</p>
                    <ul className="list-disc pl-4 text-xs space-y-1">
                      <li>每找到一个错误: +1分</li>
                      <li>正确识别错误类型: +1分</li>
                      <li>漏掉错误: -1分</li>
                    </ul>
                  </div>
                  <div className="p-2 bg-white rounded">
                    <p className="font-medium">解决方案</p>
                    <ul className="list-disc pl-4 text-xs space-y-1">
                      <li>提出正确的修复方法: +1分</li>
                      <li>解释适用的验证/核实方法: +2分</li>
                      <li>创新的防错建议: +3分</li>
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

