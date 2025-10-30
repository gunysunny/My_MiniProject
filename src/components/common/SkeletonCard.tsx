export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-gray-100 rounded-xl shadow-sm overflow-hidden">
      <div className="h-40 bg-gray-200" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  )
}