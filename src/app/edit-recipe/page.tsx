'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function EditRecipePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const index = searchParams.get("index")

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (isAuthenticated !== "true") {
      router.push("/login")
      return
    }

    const storedRecipes = localStorage.getItem("recipes")
    if (storedRecipes && index !== null) {
      const recipes = JSON.parse(storedRecipes)
      const recipe = recipes[Number(index)]
      if (recipe) {
        setName(recipe.name)
        setDescription(recipe.description)
      }
    }
  }, [index, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (index === null) return

    const storedRecipes = localStorage.getItem("recipes")
    if (storedRecipes) {
      const recipes = JSON.parse(storedRecipes)
      recipes[Number(index)] = { name, description }
      localStorage.setItem("recipes", JSON.stringify(recipes))
      router.push("/dashboard")
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Modifier la recette</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Nom de la recette</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="min-h-[120px]"
          />
        </div>
        <Button type="submit" className="w-full">
          💾 Enregistrer les modifications
        </Button>
      </form>
    </div>
  )
}
