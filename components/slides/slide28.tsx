export default function Slide28() {
  return (
    <div className="h-full w-full flex flex-col p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>

          <p className="text-xl mb-8">For becoming a Data Detective</p>

          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-5xl">🕵️</span>
            </div>
          </div>

          <div className="bg-white/20 rounded-lg p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Q&A Session</h2>
            <p className="text-lg">Any questions about data validation and verification?</p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xl">📊</span>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xl">💻</span>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🔍</span>
          </div>
        </div>

        <div>
          <p className="text-sm opacity-75">Data Detective Academy © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}

