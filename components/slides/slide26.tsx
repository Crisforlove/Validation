export default function Slide26() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Summary</h1>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Validation</h2>
          <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
            <p className="font-medium mb-3">Ensuring data is reasonable</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <span>Range check</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <span>Length check</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <span>Type check</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <span>Presence check</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <span>Format check</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <span>Check digit</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-700 mb-2">When to Use Validation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </span>
                  <span>When collecting any type of data input</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </span>
                  <span>Before processing or storing data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">✓</span>
                  </span>
                  <span>To prevent invalid data from entering a system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Verification</h2>
          <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
            <p className="font-medium mb-3">Ensuring data is accurate</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <span>Double entry</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <span>Screen/visual check</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="font-semibold text-yellow-700 mb-2">When to Use Verification</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">✓</span>
                  </span>
                  <span>When copying data from one source to another</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">✓</span>
                  </span>
                  <span>For critical information like financial data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 font-bold text-xs">✓</span>
                  </span>
                  <span>Before finalizing important transactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-blue-100 rounded-lg p-5">
          <h2 className="text-xl font-semibold text-center mb-4">Importance</h2>
          <p className="text-center text-lg">Protecting systems and users from erroneous data</p>

          <div className="mt-4 flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-medium">Prevents Errors</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-medium">Saves Time</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-medium">Protects Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

