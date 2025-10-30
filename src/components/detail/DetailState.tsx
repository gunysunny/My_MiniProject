import EmptyState from '@/components/common/EmptyState'

interface DetailStateProps {
  loading: boolean
  error: string | null
  recipe: any
}

export default function DetailState({ loading, error, recipe }: DetailStateProps) {
  if (loading)
    return <p className="p-6 text-center text-gray-500">Loading...</p>

  if (error)
    return <EmptyState message="레시피를 불러오지 못했습니다 😢" />

  if (!recipe)
    return <p className="p-6 text-center text-gray-500">No data</p>

  return null
}