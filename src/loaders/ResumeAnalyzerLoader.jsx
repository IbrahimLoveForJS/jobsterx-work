export default function ResumeAnalyzerLoader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#fbfbfd]">
      {/* Outer glow ring */}
      <div className="relative flex justify-center items-center">
        <div className="w-24 h-24 border-4 border-purple-300 rounded-full animate-spin-slow absolute"></div>
        <div className="w-20 h-20 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
      </div>

      {/* Pulsing text */}
      <p className="mt-6 text-gray-700 font-semibold text-lg animate-pulse">
        Analyzing Your Resume...
      </p>

      {/* Progress glow bar */}
      <div className="mt-4 w-56 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-[progress_2s_ease-in-out_infinite]"></div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%) }
          50% { transform: translateX(0%) }
          100% { transform: translateX(100%) }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg) }
          100% { transform: rotate(360deg) }
        }
      `}</style>
    </div>
  )
}
