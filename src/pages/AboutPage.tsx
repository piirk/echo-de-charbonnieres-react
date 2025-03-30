import PageBanner from '../components/PageBanner'
import { FaMusic, FaUsers, FaCalendarAlt, FaTrophy } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <>
      <PageBanner 
        title="À propos de l'orchestre"
        subtitle="Découvrez notre histoire et notre passion pour la musique"
      />
      <main className="max-w-6xl mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-serif mb-4">Notre histoire</h2>
          <p className="text-lg text-gray-700">
            L'Écho de Charbonnières est né en 1990 d'une passion partagée pour la musique d'harmonie.
            Depuis plus de 30 ans, notre orchestre rassemble des musiciens amateurs et professionnels
            autour d'un projet commun : faire vivre la musique dans notre région.
          </p>
        </div>

        {/* Mission et valeurs */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <FaMusic className="text-amber-800 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Notre mission</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Notre mission est de promouvoir la musique d'harmonie et de contribuer à la vie culturelle
              locale. Nous participons à de nombreux événements tout au long de l'année :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Concerts de gala</li>
              <li>Manifestations culturelles</li>
              <li>Événements municipaux</li>
              <li>Festivals de musique</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <FaTrophy className="text-amber-800 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Nos valeurs</h2>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-amber-800 font-semibold">•</span>
                <span>Excellence musicale et progression continue</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-800 font-semibold">•</span>
                <span>Partage et transmission du savoir musical</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-800 font-semibold">•</span>
                <span>Ouverture à tous les publics</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-800 font-semibold">•</span>
                <span>Engagement dans la vie culturelle locale</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Répertoire */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <FaCalendarAlt className="text-amber-800 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Notre répertoire</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Styles musicaux</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Musique classique</li>
                <li>Musique contemporaine</li>
                <li>Musique de films</li>
                <li>Musique traditionnelle</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Occasions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Concerts de saison</li>
                <li>Événements spéciaux</li>
                <li>Manifestations culturelles</li>
                <li>Fêtes locales</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notre équipe */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <FaUsers className="text-amber-800 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Notre équipe</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Direction</h3>
              <p className="text-gray-700">
                Notre orchestre est dirigé par des chefs d'orchestre passionnés et expérimentés,
                qui nous guident dans notre progression musicale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Les musiciens</h3>
              <p className="text-gray-700">
                Nous comptons parmi nos rangs des musiciens de tous niveaux, des débutants aux
                professionnels, créant ainsi une ambiance d'apprentissage et de partage unique.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AboutPage
