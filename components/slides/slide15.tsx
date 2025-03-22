export default function Slide15() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Format Check Interactive Game</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Game: "Format Detective"</h2>
            <p className="text-gray-600 mt-2">Can you spot the correctly formatted data?</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Rules</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <span>Show examples of correctly and incorrectly formatted data</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <span>Students judge if they meet format requirements</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <span>Score points for correct identifications!</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Format Comparison</h3>

            <div className="mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-semibold">
                Which email address is correctly formatted?
              </div>
              <div className="border border-blue-200 rounded-b-lg p-4 bg-white">
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <button className="border border-gray-300 rounded-lg p-3 text-left hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span>john.doe@example.com</span>
                      <span className="w-6 h-6 rounded-full border border-gray-300"></span>
                    </div>
                  </button>

                  <button className="border border-gray-300 rounded-lg p-3 text-left hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span>john.doe@example</span>
                      <span className="w-6 h-6 rounded-full border border-gray-300"></span>
                    </div>
                  </button>

                  <button className="border border-gray-300 rounded-lg p-3 text-left hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span>john.doe.example.com</span>
                      <span className="w-6 h-6 rounded-full border border-gray-300"></span>
                    </div>
                  </button>

                  <button className="border border-gray-300 rounded-lg p-3 text-left hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span>john.doe@.com</span>
                      <span className="w-6 h-6 rounded-full border border-gray-300"></span>
                    </div>
                  </button>
                </div>

                <div className="flex justify-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Check Answer
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Format Rules</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">1</span>
                    </span>
                    <span>Must have a username before @</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">2</span>
                    </span>
                    <span>Must have @ symbol</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">3</span>
                    </span>
                    <span>Must have domain with extension (.com, .org, etc.)</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Score</h4>
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

