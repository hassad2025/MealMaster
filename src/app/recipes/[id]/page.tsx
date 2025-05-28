

import { getMealById } from '@/utils/api'
import Image from 'next/image'

export default async function RecipePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const id = params.id

  const data = await getMealById(id)
  const meal = data.meals ? data.meals[0] : null

  if (!meal) {
    return <p className="p-6 text-center text-red-600">Recette non trouvée.</p>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={600}
        height={400}
        className="rounded shadow mb-6"
      />
      <p><strong>Origine :</strong> {meal.strArea}</p>
      <p><strong>Catégorie :</strong> {meal.strCategory}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingrédients :</h2>
      <ul className="list-disc list-inside mb-6">
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = meal[`strIngredient${i + 1}`]
          const measure = meal[`strMeasure${i + 1}`]
          if (ingredient && ingredient.trim()) {
            return (
              <li key={i}>
                {ingredient} - {measure}
              </li>
            )
          }
          return null
        })}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions :</h2>
      <p className="whitespace-pre-line">{meal.strInstructions}</p>
    </div>
  )
}
