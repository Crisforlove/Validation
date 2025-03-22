export default function Slide17() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Check Digit Example</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl bg-blue-50 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">ISBN-10 Check Digit Calculation</h2>

          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gray-100 px-6 py-3 rounded-lg">
                <span className="font-mono text-2xl">
                  0-306-40615-<span className="bg-yellow-200 px-1">2</span>
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-center">Calculation Steps</h3>

            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <div>
                  <p className="font-medium">Multiply first 9 digits by corresponding weights (10,9,8...2)</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded-lg">
                    <div className="grid grid-cols-9 gap-1 text-center">
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">0</span>
                        <span className="text-gray-600 text-xs">×10</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">3</span>
                        <span className="text-gray-600 text-xs">×9</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">0</span>
                        <span className="text-gray-600 text-xs">×8</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">6</span>
                        <span className="text-gray-600 text-xs">×7</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">4</span>
                        <span className="text-gray-600 text-xs">×6</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">0</span>
                        <span className="text-gray-600 text-xs">×5</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">6</span>
                        <span className="text-gray-600 text-xs">×4</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">1</span>
                        <span className="text-gray-600 text-xs">×3</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-600 text-xs">Digit</span>
                        <span className="font-medium">5</span>
                        <span className="text-gray-600 text-xs">×2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <div>
                  <p className="font-medium">Sum the results</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded-lg">
                    <div className="grid grid-cols-9 gap-1 text-center mb-2">
                      <div className="flex flex-col">
                        <span className="font-medium">0</span>
                        <span className="text-gray-600 text-xs">0×10</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">27</span>
                        <span className="text-gray-600 text-xs">3×9</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">0</span>
                        <span className="text-gray-600 text-xs">0×8</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">42</span>
                        <span className="text-gray-600 text-xs">6×7</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">24</span>
                        <span className="text-gray-600 text-xs">4×6</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">0</span>
                        <span className="text-gray-600 text-xs">0×5</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">24</span>
                        <span className="text-gray-600 text-xs">6×4</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">3</span>
                        <span className="text-gray-600 text-xs">1×3</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">10</span>
                        <span className="text-gray-600 text-xs">5×2</span>
                      </div>
                    </div>
                    <div className="text-center font-bold text-lg">
                      Sum = 0 + 27 + 0 + 42 + 24 + 0 + 24 + 3 + 10 = 130
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <div>
                  <p className="font-medium">Calculate remainder when divided by 11</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded-lg text-center">
                    <div className="font-bold text-lg">130 ÷ 11 = 11 remainder 9</div>
                  </div>
                </div>
              </li>

              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </span>
                <div>
                  <p className="font-medium">Subtract from 11 (if result is 10, use X)</p>
                  <div className="mt-2 bg-gray-50 p-3 rounded-lg text-center">
                    <div className="font-bold text-lg">11 - 9 = 2</div>
                    <p className="text-gray-600 mt-1">Therefore, the check digit is 2</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Verification</h3>
            <p>
              When someone enters an ISBN, the system can recalculate the check digit and compare it with the entered
              check digit. If they match, the ISBN is valid; if not, there's an error in the entered number.
            </p>
            <div className="mt-3 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <p className="text-green-700 font-medium">This helps catch data entry errors!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

