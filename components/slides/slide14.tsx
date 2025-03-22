export default function Slide14() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Validation Method 5: Format Check</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Ensuring entered data conforms to a predefined pattern
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Examples</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="text-gray-600">Must contain @ symbol</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Date</p>
                <p className="text-gray-600">Must be in format DD/MM/YYYY</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Phone number</p>
                <p className="text-gray-600">Must follow country-specific format</p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Valid</p>
                  <p className="text-gray-600">Email: user@example.com</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Invalid</p>
                  <p className="text-gray-600">Email: userexample.com (missing @)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Format Patterns</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium mb-2">Email Format</h3>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-bold text-xs">@</span>
                </div>
                <p className="text-gray-700">username@domain.com</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-green-50 p-2 rounded">
                  <span className="text-green-600">✓</span> user@example.com
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <span className="text-red-600">✗</span> user.example.com
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <span className="text-red-600">✗</span> user@example
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium mb-2">Date Format</h3>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-bold text-xs">📅</span>
                </div>
                <p className="text-gray-700">DD/MM/YYYY</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-green-50 p-2 rounded">
                  <span className="text-green-600">✓</span> 24/08/2023
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <span className="text-red-600">✗</span> 2023/08/24
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <span className="text-red-600">✗</span> 24-08-2023
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-medium mb-2">Phone Format</h3>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-bold text-xs">📞</span>
                </div>
                <p className="text-gray-700">+XX-XXX-XXX-XXXX</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-green-50 p-2 rounded">
                  <span className="text-green-600">✓</span> +1-555-123-4567
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <span className="text-red-600">✗</span> 5551234567
                </div>
                <div className="bg-red-50 p-2 rounded">
                  <span className="text-red-600">✗</span> +1(555)123-4567
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

