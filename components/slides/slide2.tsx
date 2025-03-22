export default function Slide2() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Welcome to the Data Detective Academy!</h1>

      <div className="flex flex-1">
        <div className="flex-1 pr-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Today's Mission</h2>
            <p className="text-lg text-gray-700">Learn how to check and ensure data accuracy</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills You'll Gain</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <span className="text-lg">Identifying invalid data</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <span className="text-lg">Using various validation methods</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <span className="text-lg">Confirming data accuracy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-7xl mb-2">💻</span>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Detective Mode</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

