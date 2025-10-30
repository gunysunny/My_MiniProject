import { useParams, useNavigate } from 'react-router-dom'

import { useRecipeDetail } from '@/hooks/useRecipeDetail'
import DetailHeader from '@/components/detail/DetailHeader'
import IngredientsList from '@/components/detail/IngredientsList'
import EmptyState from '@/components/common/EmptyState'

export default function Detail() {
  const { id } = useParams<{ id: string }>()
  const nav = useNavigate()
  const { recipe, loading, error } = useRecipeDetail(id)

  if (loading) return <p className="p-6 text-center text-gray-500">Loading...</p>
  if (error) return <EmptyState message="레시피를 불러오지 못했습니다 😢" />
  if (!recipe) return <p className="p-6 text-center text-gray-500">No data</p>

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-6 animate-fadeIn">
      <button
        onClick={() => nav(-1)}
        className="
          flex items-center gap-2
          px-4 py-2
          text-emerald-700 font-medium
          bg-emerald-50
          border border-emerald-200
          rounded-full
          hover:bg-emerald-100
          hover:-translate-y-[1px]
          transition-all duration-200
          shadow-sm
          cursor-pointer
        "
      >
  <span className="text-lg">←</span>
  Back
</button>

      <DetailHeader
        title={recipe.strMeal}
        category={recipe.strCategory}
        area={recipe.strArea}
        thumb={recipe.strMealThumb}
      />

      <IngredientsList recipe={recipe} />

      <section className="bg-white rounded-xl shadow p-4 animate-fadeInDelay2">
        <h2 className="text-xl font-semibold mb-3">Instructions</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {recipe.strInstructions}
        </p>
      </section>

      {recipe.strYoutube && (
        <section className="bg-white rounded-xl shadow p-4 animate-fadeInDelay3">
          <h2 className="text-xl font-semibold mb-3">Video</h2>
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              mt-4 px-4 py-2
              bg-[#FF0000] text-white font-medium
              rounded-full
              hover:bg-[#E60000]
              active:scale-95
              transition-all duration-200
              shadow-sm hover:shadow-md
            "
          >
            ▶ Watch on YouTube
          </a>
        </section>
      )}
    </div>
  )
}