import { useOutletContext } from 'react-router-dom'


import {
  HeroSection,
  CategoryList,
  RandomRecipeCard,
  RecipeCard,
  SkeletonCard,
  EmptyState
} from '@/components'
import useRecipes from '@/hooks/useRecipes'




interface LayoutContext {
  query: string
}

export default function Home() {
  const { query } = useOutletContext<LayoutContext>()
  const { recipes, randomRecipe, loading, setRecipes, error } = useRecipes(query)

  if (!query) {
    return (
      <div className="min-h-[90vh] flex flex-col items-center justify-start text-center pt-24 bg-gradient-to-b from-emerald-50 to-white animate-fadeIn">
        <HeroSection />
        <CategoryList setRecipes={setRecipes} />
        <RandomRecipeCard recipe={randomRecipe} />
      </div>
    )
  }

  if (error) {
    return(
      <div className='py-20 text-center text-red-500 font-medium'>
        {error}
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-6 animate-fadeIn">
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {!loading && recipes.length === 0 && (
        <EmptyState message="검색 결과가 없습니다." icon="🥣" />
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recipes.map((r) => (
          <RecipeCard
            key={r.idMeal}
            id={r.idMeal}
            title={r.strMeal}
            thumb={r.strMealThumb}
            category={r.strCategory}
          />
        ))}
      </div>
    </div>
  )
}