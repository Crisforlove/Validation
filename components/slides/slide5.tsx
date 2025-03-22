export default function Slide5() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Introducing Validation - The Safety Checker for Data</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition of Validation</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Ensuring input data is reasonable before being accepted by the system
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">How Validation Works</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-lg">Automatically checks each data item</p>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <p className="text-lg">Rejects and displays error message if data is invalid</p>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <p className="text-lg">Allows re-entry of data</p>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div className="flex-1 bg-white p-2 rounded border border-green-200">
                    <p className="text-green-700">Valid data: Age = 25</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div className="flex-1 bg-white p-2 rounded border border-red-200">
                    <p className="text-red-700">Invalid data: Age = 250</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div className="flex-1 bg-white p-2 rounded border border-red-200">
                    <p className="text-red-700">Invalid data: Age = "twenty"</p>
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

