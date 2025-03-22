export default function Slide21() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Verification Method 2: Screen/Visual Check</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">User manually reviews entered data</p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <p className="text-lg font-medium">After data entry, system displays data on screen</p>
                <p className="text-gray-600">Shows a summary of all entered information</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <p className="text-lg font-medium">Prompts user to confirm accuracy</p>
                <p className="text-gray-600">Asks user to review and verify</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <p className="text-lg font-medium">User can compare with paper document or rely on memory</p>
                <p className="text-gray-600">Checks if information matches the source</p>
              </div>
            </li>
          </ol>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Advantages</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </span>
                  <span>Simple to implement</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </span>
                  <span>Requires no additional data entry</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </span>
                  <span>User can catch obvious errors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Screen Check Example</h2>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-4 text-center">Order Confirmation</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-2">Please review your order details:</h4>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <span>John Smith</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Shipping Address:</span>
                    <span>123 Main St, Anytown, USA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <span>john.smith@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone:</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Payment Method:</span>
                    <span>Credit Card ending in 1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total:</span>
                    <span>$99.99</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-center text-yellow-700">
                  Please check that all information is correct before proceeding.
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                  Edit Information
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">Benefits of Screen Check</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">1</span>
                  </span>
                  <span>Catches typos and data entry errors</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">2</span>
                  </span>
                  <span>Gives users a chance to review before finalizing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">3</span>
                  </span>
                  <span>Reduces errors in critical information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

