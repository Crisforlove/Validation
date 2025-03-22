export default function Slide22() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Screen Check Interactive Game</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Game: "Accuracy Confirmer"</h2>
            <p className="text-gray-600 mt-2">Can you spot the errors in this form?</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Rules</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <span>Show a completed form with some errors</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <span>Students check for errors</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <span>Click on each error you find</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Error Finding Game</h3>

            <div className="mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-semibold">
                Student Registration Form - Find the Errors!
              </div>
              <div className="border border-blue-200 rounded-b-lg p-4 bg-white">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Student Name:</label>
                      <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">John Smth</div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Student ID:</label>
                      <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">S12345678</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth:</label>
                      <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">31/02/2010</div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Grade Level:</label>
                      <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">Grade 7</div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address:</label>
                    <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">john.smithexample.com</div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Phone:</label>
                    <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">(555) 123-45678</div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Home Address:</label>
                    <div className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                      123 Main Street, Anytown, USA 90210
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Submit Form
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-700 mb-2">Your Task</h4>
              <p className="text-sm mb-3">
                Click on each error you find in the form above. There are 4 errors to find!
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-600">Errors Found:</span>
                  <span className="ml-2 font-bold">0/4</span>
                </div>
                <button className="bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors">
                  Show Answers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

