export default function Slide9() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Length Check Interactive Game</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Game: "Password Manager"</h2>
            <p className="text-gray-600 mt-2">Create a password that meets the length requirements!</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Rules</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <span>Create a password that meets specific length requirements</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <span>System judges if the password meets length requirements</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <span>Try different challenges with different length requirements</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Password Strength Indicator</h3>

            <div className="mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-semibold">
                Password Length Requirement: 8-12 characters
              </div>
              <div className="border border-blue-200 rounded-b-lg p-4 bg-white">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enter Password</label>
                  <div className="flex">
                    <input
                      type="password"
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      placeholder="Create a password"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Current length: 0 characters</p>
                </div>

                <div className="mb-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 w-0"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Too Short</span>
                    <span>Perfect Length</span>
                    <span>Too Long</span>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Check Password
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
                    <span>"password1" (8 chars)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>"SecurePass" (10 chars)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-green-600 font-bold text-xs">✓</span>
                    </span>
                    <span>"DataDetect12" (12 chars)</span>
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
                    <span>"pass" (4 chars - too short)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-red-600 font-bold text-xs">✗</span>
                    </span>
                    <span>"DataDetective123" (16 chars - too long)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-red-600 font-bold text-xs">✗</span>
                    </span>
                    <span>"" (empty - no characters)</span>
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

