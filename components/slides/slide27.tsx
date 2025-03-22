export default function Slide27() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Congratulations!</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <div className="bg-blue-50 rounded-lg p-8 border-4 border-blue-200 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
            </div>

            <div className="text-center mb-6 pt-4">
              <h2 className="text-2xl font-bold text-blue-700">You are now an official Data Detective!</h2>
              <p className="text-gray-600 mt-2">Certificate of Achievement</p>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-100">
              <div className="text-center">
                <p className="text-lg mb-4">This certifies that</p>
                <p className="text-2xl font-bold text-blue-800 mb-4">________________________</p>
                <p className="text-lg mb-6">has successfully completed the Data Detective Academy training</p>
                <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">Skills Gained</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>Data Validation Methods</span>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>Data Verification Techniques</span>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>Error Detection</span>
                </div>

                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>Data Protection</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="text-lg font-semibold text-center mb-3">Your Mission</h3>
              <p className="text-center">Discover and prevent data errors in everyday life</p>
              <div className="flex justify-center mt-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

