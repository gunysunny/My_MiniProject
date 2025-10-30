import { useEffect, useState } from 'react'
import { getRecipeDetail } from '@/api/recipes'

export function useRecipeDetail(id?: string) {
  const [recipe, setRecipe] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setError(null)
    getRecipeDetail(id)
      .then((data) => setRecipe(data))
      .catch((err) => setError(err?.message ?? 'Failed to load'))
      .finally(() => setLoading(false))
  }, [id])

  return { recipe, loading, error }
}