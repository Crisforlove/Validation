export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="mr-2">🕵️</span>
              数据侦探学院
            </h2>
            <p className="text-blue-100">成为数据世界的守护者！</p>
          </div>

          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} 数据侦探学院</p>
            <p className="text-blue-100">保护数据，从我做起</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

