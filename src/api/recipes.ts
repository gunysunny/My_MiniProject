import api from './axios'

export async function searchRecipes(query: string) {
  if (!query) return []

  try {
    const res = await api.get(`/search.php?s=${query}`)
    return res.data.meals || []
  } catch (error) {
    console.error('API Error:', error)
    return []
  }
}

export async function getRecipeDetail(id: string) {
  try {
    const res = await api.get(`/lookup.php?i=${id}`)
    return res.data.meals?.[0] || null
  } catch (error) {
    console.error('Detail API Error:', error)
    return null
  }
}