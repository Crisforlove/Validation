export default function Slide16() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Validation Method 6: Check Digit</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          The final digit in a code, used to validate all other digits
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Uses</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Barcodes</p>
                <p className="text-gray-600">Used in retail products</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">ISBN</p>
                <p className="text-gray-600">International Standard Book Number</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">VIN</p>
                <p className="text-gray-600">Vehicle Identification Number</p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">How It Works</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </span>
                  <span>Calculated from preceding digits using a specific formula</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </span>
                  <span>Detects errors in data entry or transmission</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </span>
                  <span>Helps identify counterfeit or invalid codes</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Examples</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium mb-3">ISBN-10</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="font-mono text-lg">
                    0-306-40615-<span className="bg-yellow-200 px-1">2</span>
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>The last digit (2) is the check digit, calculated from the first 9 digits.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium mb-3">UPC Barcode</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-3xl mr-2">📊</span>
                    <span className="font-mono text-lg">
                      72527273070<span className="bg-yellow-200 px-1">7</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>The last digit (7) is the check digit, calculated from the first 11 digits.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium mb-3">Credit Card Number</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-3xl mr-2">💳</span>
                    <span className="font-mono text-lg">
                      4532 0151 5151 212<span className="bg-yellow-200 px-1">1</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>The last digit (1) is the check digit, calculated using the Luhn algorithm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

