export default function Slide8() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Validation Method 2: Length Check</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Ensuring data contains a specific number of characters
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
                <p className="text-lg font-medium">Postal code</p>
                <p className="text-gray-600">Must have 6 digits</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Username</p>
                <p className="text-gray-600">Must be between 3-15 characters</p>
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
                  <p className="text-gray-600">Postal Code: 123456</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Invalid</p>
                  <p className="text-gray-600">Postal Code: 12345 (too short)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Code Examples</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Exact Length</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
              <pre className="text-sm overflow-auto">
                {`OUTPUT "Please enter your value of ", Limit , "  characters "
REPEAT
 INPUT Value
 IF LENGTH(Value) <> Limit
  THEN
   OUTPUT "Your value must be exactly" , Limit ," characters, please re-enter "
 ENDIF
UNTIL LENGTH(Value) = Limit`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Range of Length</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
              <pre className="text-sm overflow-auto">
                {`OUTPUT "Please enter your value "
REPEAT
 INPUT Value
 IF LENGTH(Value) > UpperLimit OR LENGTH(Value) < LowerLimit
  THEN
   OUTPUT "Too short or too long, please re-enter "
 ENDIF
UNTIL LENGTH(Value) <= UpperLimit AND LENGTH(Value) >= LowerLimit`}
              </pre>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Length Visualization</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="grid grid-cols-6 gap-1">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={num}
                      className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center border border-blue-200"
                    >
                      <span className="text-blue-600 font-medium">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">A postal code with exactly 6 characters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

