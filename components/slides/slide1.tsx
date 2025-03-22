export default function Slide1() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">🕵️</span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Data Validation and Verification</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Data Detective Academy</h2>
      <p className="text-xl text-center animate-pulse">Become a Guardian of the Data World!</p>
      <div className="absolute bottom-8 right-8 flex space-x-2">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">💻</span>
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">📊</span>
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">🔍</span>
        </div>
      </div>
    </div>
  )
}

