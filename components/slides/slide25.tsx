export default function Slide25() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Tips for Being a Data Detective</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl bg-blue-50 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🕵️</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 border border-blue-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold">Always check data ranges</h3>
              </div>
              <p className="text-gray-700 flex-1">
                Make sure numerical values fall within reasonable limits. For example, ages should be between 1-120
                years.
              </p>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm">
                <span className="font-medium">Example:</span> If someone enters 300 for their age, that's a red flag!
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-blue-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold">Confirm correct data formats</h3>
              </div>
              <p className="text-gray-700 flex-1">
                Verify that data follows the expected pattern, especially for emails, dates, and phone numbers.
              </p>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm">
                <span className="font-medium">Example:</span> An email address should always contain the @ symbol.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-blue-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold">Use double entry for important information</h3>
              </div>
              <p className="text-gray-700 flex-1">
                For critical data like passwords or account numbers, enter the information twice to ensure accuracy.
              </p>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm">
                <span className="font-medium">Example:</span> When creating a password, always confirm it by typing it
                twice.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-blue-200 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold">Visually check before submitting</h3>
              </div>
              <p className="text-gray-700 flex-1">
                Always review your data on the confirmation screen before finalizing any submission.
              </p>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm">
                <span className="font-medium">Example:</span> Double-check your shipping address before completing an
                online purchase.
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-blue-200 flex flex-col md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold">Seek help when uncertain</h3>
              </div>
              <p className="text-gray-700 flex-1">
                If you're not sure about the correct format or value for a data field, ask for help or look for
                examples.
              </p>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg text-sm">
                <span className="font-medium">Example:</span> If you're unsure about the format for entering a date,
                check the instructions or ask a teacher/parent.
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">💡</span>
              </div>
              <p className="text-yellow-800 font-medium">
                Remember: It's easier to prevent data errors than to fix them later!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

