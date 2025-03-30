import { useState } from 'react'

type ContactForm = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-center mb-8">Contactez-nous</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Informations de contact */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-serif mb-4">Informations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Adresse</h3>
                <p className="text-gray-600">
                  L'Écho de Charbonnières<br />
                  123 rue de la Musique<br />
                  12345 Charbonnières
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Contact</h3>
                <p className="text-gray-600">
                  Email: contact@echodecharbonnieres.fr<br />
                  Tél: 01 23 45 67 89
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Répétitions</h3>
                <p className="text-gray-600">
                  Tous les mardis soir<br />
                  De 20h00 à 22h00<br />
                  Salle de répétition, Charbonnières
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Rejoignez l'orchestre</h2>
            <p className="text-gray-700 mb-4">
              Vous jouez d'un instrument à vent ou à percussion ? Venez découvrir notre orchestre lors d'une répétition !
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Répétitions ouvertes aux visiteurs</li>
              <li>Accueil personnalisé</li>
              <li>Prêt de partitions possible</li>
              <li>Ambiance conviviale</li>
            </ul>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-serif mb-6">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Sujet
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="rejoindre">Rejoindre l'orchestre</option>
                <option value="concert">Information sur un concert</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
