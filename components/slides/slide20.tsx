export default function Slide20() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Double Entry Interactive Game</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Game: "Exact Copy"</h2>
            <p className="text-gray-600 mt-2">Test your accuracy with double entry!</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Rules</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <span>One student sees a text, dictates it to another student who types it</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <span>Then the original student types it again to see if they match</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <span>System compares both entries and shows if they match</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Matching Game</h3>

            <div className="mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-semibold">
                Double Entry Challenge
              </div>
              <div className="border border-blue-200 rounded-b-lg p-4 bg-white">
                <div className="mb-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p className="text-center font-medium">Original Text (Student 1 sees this):</p>
                    <p className="text-center mt-2 font-mono">The quick brown fox jumps over the lazy dog.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Entry (Student 2 types what they hear):
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                        placeholder="Type what you hear..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Second Entry (Student 1 types from memory):
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                        placeholder="Type the original text..."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Check Match
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Perfect Match</h4>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <p className="text-sm">Both entries are exactly the same!</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 mb-2">Mismatch</h4>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <p className="text-sm">Entries don't match! Try again.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

