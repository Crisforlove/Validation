export default function Slide6() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Validation Method 1: Range Check</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Checking if a numerical value falls within specified upper and lower limits
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Examples</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Student grades</p>
                <p className="text-gray-600">Must be between 0-100</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Age</p>
                <p className="text-gray-600">Must be between 1-120</p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Valid</p>
                  <p className="text-gray-600">Age = 25</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Invalid</p>
                  <p className="text-gray-600">Age = 150</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Code Example</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">
              {`REPEAT
 INPUT Value
 IF Value < MinimumValue OR Value > MaximumValue
  THEN
   OUTPUT "The student's mark should be in the range", MinimumValue ," to ", MaximumValue
 ENDIF
UNTIL Value >= MinimumValue AND Value <= MaximumValue`}
            </pre>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Range Visualization</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="h-12 bg-gray-200 rounded-full overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-1/4 bg-red-400"></div>
                <div className="absolute inset-y-0 left-1/4 right-1/4 bg-green-400"></div>
                <div className="absolute inset-y-0 right-0 w-1/4 bg-red-400"></div>

                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                    <span className="text-xs font-bold">0</span>
                  </div>
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                    <span className="text-xs font-bold">100</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-red-600">Invalid</span>
                <span className="text-green-600">Valid Range</span>
                <span className="text-red-600">Invalid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

