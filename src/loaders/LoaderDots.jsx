export default function LoaderDots() {
  return (
    <div className="flex justify-center items-center gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  )
}
