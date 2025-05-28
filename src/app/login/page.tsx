
'use client'
import LoginForm from "@/components/ui/login-form"
export default function LoginPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4"> Connexion</h1>
      <p className="text-gray-700 mb-4">Connectez-vous pour accéder à vos recettes favorites.</p>
       <LoginForm />
    </div>
  )
}

