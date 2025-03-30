import { useState } from 'react'

type Concert = {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  isPast: boolean
}

const ConcertsPage = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const concerts: Concert[] = [
    {
      id: 1,
      title: 'Concert de printemps',
      date: '15 avril 2024',
      time: '16h00',
      location: 'Église Saint-Martin, Charbonnières',
      description: 'Un programme varié de musiques classiques et populaires',
      isPast: false,
    },
    {
      id: 2,
      title: 'Fête de la musique',
      date: '21 juin 2024',
      time: '20h00',
      location: 'Place du village, Charbonnières',
      description: 'Concert en plein air avec d\'autres associations musicales',
      isPast: false,
    },
    {
      id: 3,
      title: 'Concert de Noël',
      date: '15 décembre 2023',
      time: '15h00',
      location: 'Salle des fêtes, Charbonnières',
      description: 'Concert de musiques de Noël',
      isPast: true,
    },
  ]

  const filteredConcerts = concerts.filter(concert => 
    activeTab === 'upcoming' ? !concert.isPast : concert.isPast
  )

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-center mb-8">Nos Concerts</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-white text-amber-800 shadow'
                : 'text-gray-600 hover:text-amber-800'
            }`}
          >
            À venir
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeTab === 'past'
                ? 'bg-white text-amber-800 shadow'
                : 'text-gray-600 hover:text-amber-800'
            }`}
          >
            Passés
          </button>
        </div>
      </div>

      {/* Concerts List */}
      <div className="space-y-6">
        {filteredConcerts.map(concert => (
          <div
            key={concert.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{concert.title}</h2>
                <div className="space-y-1 text-gray-600">
                  <p>
                    <span className="font-medium">Date :</span> {concert.date}
                  </p>
                  <p>
                    <span className="font-medium">Heure :</span> {concert.time}
                  </p>
                  <p>
                    <span className="font-medium">Lieu :</span> {concert.location}
                  </p>
                </div>
                <p className="mt-4 text-gray-700">{concert.description}</p>
              </div>
              <div className="text-right">
                <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  {concert.isPast ? 'Concert passé' : 'Entrée libre'}
                </div>
                {!concert.isPast && (
                  <p className="mt-2 text-sm text-gray-500">
                    Places disponibles sur place
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Information Box */}
      <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Informations pratiques</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Les concerts sont généralement gratuits et en accès libre</li>
          <li>• Les places sont disponibles sur place, pas de réservation nécessaire</li>
          <li>• Nous vous conseillons d'arriver 15 minutes avant le début du concert</li>
          <li>• Les dons sont les bienvenus pour soutenir l'association</li>
        </ul>
      </div>
    </div>
  )
}

export default ConcertsPage
