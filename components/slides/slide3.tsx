export default function Slide3() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Why Do We Need Validation and Verification?</h1>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 rounded-lg p-6 flex flex-col">
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">School Records</h3>
          <p className="text-gray-700 text-center">What if your school recorded your 100% score as 10%?</p>
          <div className="mt-auto pt-4 flex justify-center">
            <div className="bg-red-100 rounded-full px-3 py-1 text-red-600 text-sm font-medium">Grade Error!</div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 flex flex-col">
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">💊</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Medical Records</h3>
          <p className="text-gray-700 text-center">What if a doctor entered the wrong medication dosage?</p>
          <div className="mt-auto pt-4 flex justify-center">
            <div className="bg-yellow-100 rounded-full px-3 py-1 text-yellow-600 text-sm font-medium">
              Dosage Error!
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 flex flex-col">
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🎮</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Game Accounts</h3>
          <p className="text-gray-700 text-center">What if your game account password was saved incorrectly?</p>
          <div className="mt-auto pt-4 flex justify-center">
            <div className="bg-purple-100 rounded-full px-3 py-1 text-purple-600 text-sm font-medium">Login Error!</div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <p className="text-xl font-semibold text-center text-blue-600">
          Conclusion: Data errors can lead to various problems!
        </p>
      </div>
    </div>
  )
}

