export default function Slide13() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Presence Check Interactive Game</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Game: "Form Completion Challenge"</h2>
            <p className="text-gray-600 mt-2">Complete the form correctly and quickly!</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Rules</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </span>
                <span>Complete a form with required fields</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </span>
                <span>See who can correctly complete it fastest</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </span>
                <span>Form will show errors if required fields are left empty</span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Form Game Interface</h3>

            <div className="mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-t-lg text-center font-semibold">
                Student Registration Form
              </div>
              <div className="border border-blue-200 rounded-b-lg p-4 bg-white">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Student Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      placeholder="Enter student name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Student ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      placeholder="Enter student ID"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Grade Level <span className="text-red-500">*</span>
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 w-full">
                      <option value="">Select grade level</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Parent Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      placeholder="Enter parent email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      placeholder="Optional notes"
                      rows={2}
                    ></textarea>
                  </div>

                  <div className="text-sm text-gray-600">
                    <span className="text-red-500">*</span> Required fields
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-600">Time: </span>
                      <span className="font-bold">00:30</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Submit Form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

