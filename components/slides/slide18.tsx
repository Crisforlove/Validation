export default function Slide18() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Introducing Verification - The Double-Checker for Data</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition of Verification</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Ensuring data is accurately copied from one source to another
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Why We Need Verification</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Human input errors</p>
                <p className="text-gray-600">People make mistakes when typing</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Problems during transmission</p>
                <p className="text-gray-600">Data can be corrupted during transfer</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Ensuring accuracy of important data</p>
                <p className="text-gray-600">Critical information must be correct</p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Validation vs. Verification</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-700 mb-2">Validation</h4>
                  <p className="text-sm">Checks if data is reasonable and makes sense</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-700 mb-2">Verification</h4>
                  <p className="text-sm">Checks if data was copied or entered correctly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Verification Process</h2>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔄</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">Original Data</h3>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="font-mono">Account: 12345678</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">↓</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">Data Entry</h3>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="font-mono">Account: 12345678</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">↓</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">Verification</h3>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-600 font-bold">✓</span>
                      </span>
                      <p className="font-mono">Data matches! Account verified.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

