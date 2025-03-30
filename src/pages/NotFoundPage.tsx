import { Link } from 'react-router-dom'
import { RiHomeLine } from 'react-icons/ri'

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-serif text-amber-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
        >
          <RiHomeLine className="w-5 h-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
