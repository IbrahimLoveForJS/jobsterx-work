export default function LoaderBar() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <p className="text-center text-gray-600 text-sm mb-2">Analyzing Resume...</p>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="h-2 bg-purple-600 animate-[progress_2s_linear_infinite]"></div>
      </div>
      <style>{`
        @keyframes progress {
          0% { width: 0% }
          50% { width: 70% }
          100% { width: 100% }
        }
      `}</style>
    </div>
  )
}
