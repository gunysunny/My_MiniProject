interface Props {
  recipe: any
}

export default function RandomRecipeCard({ recipe }: Props) {
  if (!recipe) return null
  return (
    <section className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition animate-fadeInDelay4">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-500 mb-3">{recipe.strCategory}</p>
        <p className="text-gray-600 text-sm line-clamp-3">{recipe.strInstructions}</p>
      </div>
    </section>
  )
}