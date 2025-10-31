import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeDetail } from '@/hooks/useRecipeDetail'

import { DetailHeader, IngredientsList, InstructionSection, VideoSection } from '@/components/detail'
import DetailState from '@/components/detail/DetailState'

export default function Detail() {
  const { id } = useParams<{ id: string }>()
  const nav = useNavigate()
  const { recipe, loading, error } = useRecipeDetail(id)

  // 상태별 화면 처리
  if (loading || error || !recipe) {
    return <DetailState loading={loading} error={error} recipe={recipe} />
  }

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
      <InstructionSection text={recipe.strInstructions} />
      {recipe.strYoutube && <VideoSection url={recipe.strYoutube} />}
    </div>
  )
}