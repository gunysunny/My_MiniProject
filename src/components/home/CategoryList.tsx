import { searchRecipes } from '@/api/recipes'

interface Props {
  setRecipes: React.Dispatch<React.SetStateAction<any[]>>
}

export default function CategoryList({ setRecipes }: Props) {
  const categories = ['Beef', 'Chicken', 'Dessert', 'Vegetarian']

  return (
    <section className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInDelay3">
      {categories.map((cat) => (
        <button
          key={cat}
          className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full font-medium hover:bg-emerald-200 transition cursor-pointer cursor-pointer"
          onClick={() => searchRecipes(cat).then(setRecipes)}
        >
          {cat}
        </button>
      ))}
    </section>
  )
}