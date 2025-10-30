interface Props {
  message: string
  icon?: string
}

export default function EmptyState({ message, icon = '🍳' }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-500 animate-fadeIn">
      <span className="text-5xl mb-2">{icon}</span>
      <p className="text-lg font-medium">{message}</p>
    </div>
  )
}