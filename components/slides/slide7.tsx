export default function Slide7() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Range Check Interactive Game</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Game: "Within Range"</h2>
            <p className="text-gray-600 mt-2">Test your understanding of range checks!</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Rules</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <span>Teacher calls out a range (e.g., 0-10)</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <span>Students call out a number</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <span>System (teacher) determines if it's within range</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Game Interface</h3>

            <div className="mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-semibold">
                Current Range: 1 - 50
              </div>
              <div className="border border-blue-200 rounded-b-lg p-4 bg-white">
                <div className="flex items-center justify-center space-x-4">
                  <input
                    type="number"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-24 text-center text-lg"
                    placeholder="?"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Check
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Valid Examples</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>1 (within 1-50)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>25 (within 1-50)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>50 (within 1-50)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 mb-2">Invalid Examples</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-red-600 font-bold text-xs">✗</span>
                    </span>
                    <span>0 (below range)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-red-600 font-bold text-xs">✗</span>
                    </span>
                    <span>51 (above range)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-red-600 font-bold text-xs">✗</span>
                    </span>
                    <span>"ten" (not a number)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

