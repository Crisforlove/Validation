export default function Slide19() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Verification Method 1: Double Entry</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Data is entered twice, possibly by different operators
        </p>
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
                <p className="text-lg font-medium">System compares both entries</p>
                <p className="text-gray-600">Checks if they match exactly</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <p className="text-lg font-medium">Displays error message if different</p>
                <p className="text-gray-600">Alerts user to the mismatch</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <p className="text-lg font-medium">Prompts for re-entry of data</p>
                <p className="text-gray-600">Allows correction of errors</p>
              </div>
            </li>
          </ol>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>Bank account number entry</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>Password confirmation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>Email address verification</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-blue-600 font-bold">•</span>
                  </span>
                  <span>Critical financial data entry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Double Entry Example</h2>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-4 text-center">Password Creation</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your password again"
                />
              </div>

              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">Match</h4>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium">Password: abc123</p>
                  <p className="font-medium">Confirm: abc123</p>
                </div>
              </div>
              <p className="text-sm text-green-600 mt-2">Passwords match! Account created.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-700 mb-2">Mismatch</h4>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">✗</span>
                </div>
                <div>
                  <p className="font-medium">Password: abc123</p>
                  <p className="font-medium">Confirm: abc124</p>
                </div>
              </div>
              <p className="text-sm text-red-600 mt-2">Passwords don't match! Please try again.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

