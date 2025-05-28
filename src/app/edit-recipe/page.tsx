import React, { Suspense } from "react"
import EditRecipeClient from "./EditRecipeClient"

function Loading() {
  return <p>Chargement...</p>
}

export default function EditRecipePage() {
  return (
    <Suspense fallback={<Loading />}>
      <EditRecipeClient />
    </Suspense>
  )
}

