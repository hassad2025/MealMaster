'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Recipe = {
  name: string
  description: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [newName, setNewName] = useState("")
  const [newDescription, setNewDescription] = useState("")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (isAuthenticated !== "true") {
      router.push("/login")
      return
    }

    const stored = localStorage.getItem("recipes")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setRecipes(parsed)
        } else {
          setRecipes([])
        }
      } catch {
        setRecipes([])
      }
    }
  }, [router])

  const saveRecipes = (newRecipes: Recipe[]) => {
    setRecipes(newRecipes)
    localStorage.setItem("recipes", JSON.stringify(newRecipes))
  }

  const handleDelete = (index: number) => {
    if (!confirm("Voulez-vous vraiment supprimer cette recette ?")) return
    const updated = recipes.filter((_, i) => i !== index)
    saveRecipes(updated)
  }

  const handleEdit = (index: number) => {
    const newName = prompt("Nouveau nom de la recette :", recipes[index].name)
    const newDesc = prompt(
      "Nouvelle description :",
      recipes[index].description
    )
    if (newName && newDesc) {
      const updated = [...recipes]
      updated[index] = { name: newName, description: newDesc }
      saveRecipes(updated)
    }
  }

  const handleAdd = () => {
    if (newName.trim() === "" || newDescription.trim() === "") {
      alert("Veuillez remplir le nom et la description")
      return
    }
    const newRecipe = { name: newName.trim(), description: newDescription.trim() }
    const updated = [...recipes, newRecipe]
    saveRecipes(updated)
    setNewName("")
    setNewDescription("")
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Bienvenue sur votre tableau de bord MealMaster
      </h1>

      {/* Formulaire ajout recette */}
      <div className="mb-8 p-4 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Ajouter une nouvelle recette</h2>
        <Input
          placeholder="Nom de la recette"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="mb-3"
        />
        <Textarea
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="mb-3 min-h-[100px]"
        />
        <Button onClick={handleAdd} className="w-full">
          Ajouter la recette
        </Button>
      </div>

      {/* Liste des recettes */}
      {recipes.length === 0 ? (
        <p>Aucune recette trouvée. Ajoutez-en une pour commencer !</p>
      ) : (
        <div className="space-y-4">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold">
                {recipe?.name || "Nom non défini"}
              </h2>
              <p className="text-gray-600 mb-2">
                {recipe?.description || "Description manquante"}
              </p>
              <div className="flex gap-2">
                <Button onClick={() => handleEdit(index)}> Modifier</Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(index)}
                >
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


