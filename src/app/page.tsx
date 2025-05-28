'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { searchMeals, filterByArea } from '@/utils/api'

interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strArea: string
  strCategory: string
}

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Chargement initial : recherche "chicken"
    searchMeals('chicken').then(data => {
      setMeals(data.meals || [])
    })
  }, [])

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!searchTerm.trim()) return

    try {
      const data = await filterByArea(searchTerm.trim())
      setMeals(data.meals || [])
    } catch (error) {
      console.error('Erreur lors de la recherche par zone :', error)
      setMeals([])
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">🍽️ Bienvenue sur MealMaster</h1>
      <p className="text-center mb-8 text-gray-700">
        Explorez des milliers de recettes du monde entier. Ajoutez vos plats préférés à vos favoris,
        notez-les, et laissez-vous inspirer !
      </p>

      <form onSubmit={handleSearch} className="mb-6 flex gap-2 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Tapez l'origine du plat (ex: French)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow"
        >
          Rechercher
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Quelques idées gourmandes :</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.length > 0 ? (
          meals.map(meal => (
            <Link
              key={meal.idMeal}
              href={`/recipes/${meal.idMeal}`}
              className="border rounded-lg shadow hover:shadow-lg overflow-hidden"
            >
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
                <p className="text-sm text-gray-500">
                  {meal.strArea} • {meal.strCategory}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Aucune recette trouvée.</p>
        )}
      </div>
    </div>
  )
}
