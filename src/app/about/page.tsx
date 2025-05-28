'use client'

export default function AboutPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center"> À propos de MealMaster</h1>

      <p className="text-gray-700 mb-6 text-lg text-center">
        MealMaster est bien plus qu'une simple application de recettes. C’est une plateforme pensée pour les passionnés de cuisine, les curieux des saveurs du monde, et tous ceux qui aiment bien manger.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">🌍 Une inspiration culinaire sans frontières</h2>
        <p className="text-gray-700">
          Que vous soyez amateur de cuisine italienne, fan de plats épicés d’Asie, ou à la recherche de recettes végétariennes originales,
          MealMaster vous offre une bibliothèque variée et internationale. Chaque recette est soigneusement sélectionnée pour sa qualité,
          sa simplicité et son authenticité.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">✨ Fonctionnalités clés</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>🔍 Recherche intelligente de recettes par nom, origine ou ingrédient</li>
          <li>⭐ Ajoutez vos plats préférés à votre liste de favoris</li>
          <li>📝 Laissez des notes personnelles sur chaque recette</li>
          <li>🌎 Explorez par région ou catégorie</li>
          <li>📸 Découvrez des photos inspirantes et réalistes de chaque plat</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">🤝 Une communauté de gourmets</h2>
        <p className="text-gray-700">
          MealMaster a été conçu pour créer des connexions entre les amoureux de la cuisine. Vous pouvez partager vos recettes préférées,
          laisser vos avis, et enrichir vos connaissances culinaires grâce à une communauté bienveillante et passionnée.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-green-700">💡 Notre vision</h2>
        <p className="text-gray-700">
          Nous croyons que cuisiner peut transformer le quotidien, rapprocher les cultures, et créer des souvenirs inoubliables.
          Avec MealMaster, notre objectif est de rendre la cuisine accessible, inspirante et ludique pour tous.
        </p>
      </section>
    </div>
  )
}
