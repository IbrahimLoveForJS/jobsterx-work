export default function ResumePreviewLoader() {
  return (
    <div className="p-6 bg-[#fbfbfd] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl animate-pulse">
        {/* Title */}
        <div className="h-8 bg-gray-200 rounded-lg mb-4 w-1/3"></div>

        {/* Contact info */}
        <div className="flex justify-between mb-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* Sections */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="mb-6">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="h-3 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
