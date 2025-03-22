export default function Slide12() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Validation Method 4: Presence Check</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Definition</h2>
        <p className="text-lg text-gray-700 bg-blue-50 p-3 rounded-lg">
          Ensuring required fields have data input, cannot be left blank
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
                <p className="text-lg font-medium">Name field in registration forms</p>
                <p className="text-gray-600">Cannot be left empty</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-blue-600 font-bold">•</span>
              </div>
              <div>
                <p className="text-lg font-medium">Shipping address on shopping websites</p>
                <p className="text-gray-600">Required for delivery</p>
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
                  <p className="text-gray-600">Name: "John Smith"</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <p className="text-lg font-medium">Invalid</p>
                  <p className="text-gray-600">Name: "" (empty)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Code Example</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">
              {`OUTPUT "Please enter the value "
REPEAT
 INPUT Value
 IF Value = ""
  THEN
   OUTPUT "*=Required "
 ENDIF
UNTIL Value <> ""`}
            </pre>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Form with Required Fields</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div className="text-sm text-gray-600">
                  <span className="text-red-500">*</span> Required fields
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

