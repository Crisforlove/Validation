export default function Slide10() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Validation Method 3: Type Check</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Ensuring entered data is of the correct data type
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
                <p className="text-lg font-medium">Age</p>
                <p className="text-gray-600">Must be a number, not letters</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Phone number</p>
                <p className="text-gray-600">Cannot contain letters</p>
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
                  <p className="text-gray-600">Age: 25</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Invalid</p>
                  <p className="text-gray-600">Age: "twenty-five"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Code Example</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">
              {`OUTPUT "Enter the value "
REPEAT
 INPUT Value
 IF Value <> DIV(Value, 1)
  THEN
   OUTPUT "This must be a whole number, please re-enter"
 ENDIF
UNTIL Value = DIV(Value, 1)`}
            </pre>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Common Data Types</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-blue-600 font-bold text-xs">123</span>
                    </div>
                    <span className="font-medium">Number</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Examples: 1, 42, -5, 3.14</p>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-green-600 font-bold text-xs">Abc</span>
                    </div>
                    <span className="font-medium">Text</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Examples: "Hello", "Name"</p>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-yellow-600 font-bold text-xs">T/F</span>
                    </div>
                    <span className="font-medium">Boolean</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Examples: true, false</p>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-purple-600 font-bold text-xs">📅</span>
                    </div>
                    <span className="font-medium">Date</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Examples: 2023-08-24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

