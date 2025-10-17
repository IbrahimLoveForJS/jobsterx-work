export default function Skeleton({ width = 'full', height = '4', rounded = 'md', className = '' }) {
  return (
    <div
      className={`
        bg-gray-200 dark:bg-gray-700
        animate-pulse
        ${`w-${width} h-${height} rounded-${rounded}`}
        ${className}
      `}
    />
  )
}
