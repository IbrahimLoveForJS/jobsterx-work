export default function LoaderSkeleton() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
      ))}
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
    </div>
  )
}
