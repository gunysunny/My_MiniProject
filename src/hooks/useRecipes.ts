import { useEffect, useState } from 'react'
import { searchRecipes } from '@/api/recipes'
import axios from 'axios'

export default function useRecipes(query: string) {
  const [recipes, setRecipes] = useState<any[]>([])
  const [randomRecipe, setRandomRecipe] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query) return
    setLoading(true)
    setError(null)
    searchRecipes(query)
      .then(setRecipes)
      .catch(() => setError('검색 중 오류가 발생했습니다.'))
      .finally(() => setLoading(false))
  }, [query])

  useEffect(() => {
    if (query) return
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => setRandomRecipe(res.data.meals[0]))
    .catch(() => setError('랜덤 레시피를 불러오지 못했습니다.'))
  }, [query])

  return { recipes, randomRecipe, loading, setRecipes, error }
}