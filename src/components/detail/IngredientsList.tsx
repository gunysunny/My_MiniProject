interface Props {
  recipe: any
}
export default function IngredientsList({ recipe }: Props) {
  const items: Array<{ name: string; measure: string }> = []
  for (let i = 1; i <= 20; i++) {
    const name = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (!name) continue
    items.push({ name, measure })
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 animate-fadeInDelay">
      <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((it, idx) => (
          <li key={idx} className="flex justify-between text-gray-700">
            <span>{it.name}</span>
            <span className="text-gray-500">{it.measure}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}