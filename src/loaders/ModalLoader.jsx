export function ModalLoader() {
  return (
    <div className="p-6 w-full max-w-lg bg-white rounded-xl shadow-lg animate-pulse space-y-4">
      <div className="h-6 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  )
}
