import { useState } from 'react'
import PageBanner from '../components/PageBanner'

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
    <>
      <PageBanner 
        title="Nos Concerts"
        subtitle="Découvrez nos prochains événements et revivez nos concerts passés"
      />
      <main className="max-w-6xl mx-auto py-12 px-4">
        {/* Prochains concerts */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6">Prochains concerts</h2>
          <div className="grid gap-6">
            {concerts
              .filter(concert => !concert.isPast)
              .map((concert, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800 mb-2">{concert.title}</h3>
                      <p className="text-gray-600 mb-2">{concert.location}</p>
                      <p className="text-gray-700">{concert.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-amber-800">{concert.date}</div>
                      <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mt-2">
                        À venir
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Concerts passés */}
        <section>
          <h2 className="text-2xl font-serif mb-6">Concerts passés</h2>
          <div className="grid gap-6">
            {concerts
              .filter(concert => concert.isPast)
              .map((concert, index) => (
                <div key={index} className="bg-gray-50 shadow rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{concert.title}</h3>
                      <p className="text-gray-600 mb-2">{concert.location}</p>
                      <p className="text-gray-700">{concert.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-800">{concert.date}</div>
                      <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm mt-2">
                        Passé
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      {/* Information Box */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Informations pratiques</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Les concerts sont généralement gratuits et en accès libre</li>
            <li>• Les places sont disponibles sur place, pas de réservation nécessaire</li>
            <li>• Nous vous conseillons d'arriver 15 minutes avant le début du concert</li>
            <li>• Les dons sont les bienvenus pour soutenir l'association</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ConcertsPage
