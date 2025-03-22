export default function Slide11() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Type Check Interactive Game</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Game: "Type Classifier"</h2>
            <p className="text-gray-600 mt-2">Can you identify the correct data type?</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Rules</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <span>Teacher presents different types of information</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <span>Students judge what type it is (number, text, date, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <span>Score points for correct classifications!</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Classification Game</h3>

            <div className="mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-semibold">
                What type of data is this?
              </div>
              <div className="border border-blue-200 rounded-b-lg p-6 bg-white">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg text-2xl font-bold">"2023-08-24"</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors">
                    Number
                  </button>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors">
                    Text
                  </button>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors">
                    Date
                  </button>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors">
                    Boolean
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Examples</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">1</span>
                    </span>
                    <div>
                      <span className="font-medium">42</span>
                      <span className="text-gray-500 ml-2">(Number)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-xs">2</span>
                    </span>
                    <div>
                      <span className="font-medium">"Hello"</span>
                      <span className="text-gray-500 ml-2">(Text)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 font-bold text-xs">3</span>
                    </span>
                    <div>
                      <span className="font-medium">true</span>
                      <span className="text-gray-500 ml-2">(Boolean)</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Score</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Correct:</div>
                    <div className="text-2xl font-bold text-green-600">0</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Incorrect:</div>
                    <div className="text-2xl font-bold text-red-600">0</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total:</div>
                    <div className="text-2xl font-bold text-blue-600">0</div>
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

