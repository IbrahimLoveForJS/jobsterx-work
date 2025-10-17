export default function Loader2() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fbfbfd]">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-10 bg-purple-600 rounded-full animate-wave"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 40%, 100% {
            transform: scaleY(0.4);
          }
          20% {
            transform: scaleY(1);
          }
        }
        .animate-wave {
          animation: wave 1.2s infinite ease-in-out;
          transform-origin: center bottom;
        }
      `}</style>
    </div>
  )
}
