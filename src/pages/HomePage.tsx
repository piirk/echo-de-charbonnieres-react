import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-amber-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            L'Écho de Charbonnières
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Orchestre harmonique de campagne
          </p>
          <Link
            to="/concerts"
            className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-colors"
          >
            Prochains concerts
          </Link>
        </div>
      </section>

      {/* Prochains événements */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-8">Prochains événements</h2>
        <div className="grid gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">Concert de printemps</h3>
                <p className="text-gray-600">Dimanche 15 avril 2024 - 16h00</p>
                <p className="text-gray-600">Église Saint-Martin, Charbonnières</p>
              </div>
              <div className="text-right">
                <p className="text-amber-800 font-semibold">Entrée libre</p>
                <p className="text-sm text-gray-500">Places disponibles sur place</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Notre histoire</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">
              Fondé en 1895, L'Écho de Charbonnières est un orchestre harmonique qui fait vivre la musique dans notre région depuis plus d'un siècle. Notre ensemble, composé de musiciens amateurs passionnés, se produit régulièrement lors de concerts, fêtes locales et cérémonies.
            </p>
            <p className="text-lg text-gray-700">
              Nous accueillons tous les musiciens, quel que soit leur niveau, dans une ambiance conviviale et bienveillante. Notre répertoire éclectique s'adapte à tous les publics et occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-serif mb-4">Rejoignez-nous</h2>
        <p className="text-xl text-gray-600 mb-8">
          Vous jouez d'un instrument à vent ou à percussion ? Venez nous rejoindre !
        </p>
        <Link
          to="/contact"
          className="inline-block bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
        >
          Nous contacter
        </Link>
      </section>
    </div>
  )
}

export default HomePage
