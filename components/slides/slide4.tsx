export default function Slide4() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Understanding Validation vs. Verification</h1>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-lg p-6 flex flex-col">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-5xl">🔍</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4 text-green-700">Validation</h2>
          <p className="text-gray-700 text-center mb-4">
            Checking if data is <span className="font-bold">reasonable</span> (whether it's valid)
          </p>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-600 italic text-center">
              Like a teacher checking if your answer is within a reasonable range
            </p>
          </div>
          <div className="mt-auto pt-6">
            <div className="border border-green-200 rounded-lg p-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Example:</span> Checking if an age entry is between 1-120 years
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 flex flex-col">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-5xl">✓</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">Verification</h2>
          <p className="text-gray-700 text-center mb-4">
            Confirming if data has been <span className="font-bold">correctly copied or entered</span>
          </p>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-600 italic text-center">
              Like checking if you copied your homework questions correctly
            </p>
          </div>
          <div className="mt-auto pt-6">
            <div className="border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Example:</span> Double-checking if a phone number was entered correctly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

