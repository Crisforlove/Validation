export default function Slide23() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">The Data Detective Challenge</h1>

      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Comprehensive Challenge</h2>
          <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
            Set up a data scenario with various potential errors
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Types of Errors to Find</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Range errors</p>
                    <p className="text-gray-600">Values outside acceptable limits</p>
                    <p className="text-sm text-red-600 mt-1">Example: Age = 150 years</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Length errors</p>
                    <p className="text-gray-600">Text too long or too short</p>
                    <p className="text-sm text-orange-600 mt-1">Example: Phone number with too many digits</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Type errors</p>
                    <p className="text-gray-600">Wrong data type used</p>
                    <p className="text-sm text-yellow-600 mt-1">Example: Letters in a number field</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Missing data</p>
                    <p className="text-gray-600">Required fields left empty</p>
                    <p className="text-sm text-green-600 mt-1">Example: No name provided</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Format errors</p>
                    <p className="text-gray-600">Data not in required pattern</p>
                    <p className="text-sm text-blue-600 mt-1">Example: Email without @ symbol</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">The Challenge</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🕵️</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-center mb-4">
                Students act as "Data Detectives" to find all errors
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Challenge Scenario</h4>
                  <p className="text-gray-700">
                    Your school is setting up a new student database, but some of the data has errors. As Data
                    Detectives, your job is to find and fix all the errors before the system goes live!
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">How to Play</h4>
                  <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                    <li>Form teams of 2-3 students</li>
                    <li>Each team receives a data sheet with various errors</li>
                    <li>Identify all errors and explain what validation or verification method would catch them</li>
                    <li>The team that finds the most errors in the shortest time wins!</li>
                  </ol>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-2">Bonus Points</h4>
                  <ul className="space-y-2 text-gray-700 list-disc pl-5">
                    <li>Correctly identifying the type of error</li>
                    <li>Suggesting the correct fix for each error</li>
                    <li>Explaining which validation or verification method would prevent the error</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

