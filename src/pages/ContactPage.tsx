import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUser, FaPaperPlane } from 'react-icons/fa'

type ContactForm = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Le nom doit contenir au moins 2 caractères' : ''
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? 'Email invalide' : ''
      case 'subject':
        return !value ? 'Veuillez sélectionner un sujet' : ''
      case 'message':
        return value.length < 10 ? 'Le message doit contenir au moins 10 caractères' : ''
      default:
        return ''
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation finale avant envoi
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof ContactForm])
      if (error) newErrors[key as keyof FormErrors] = error
    })

    if (Object.keys(newErrors).length === 0) {
      // TODO: Implement form submission
      console.log('Form submitted:', formData)
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validation en temps réel
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  return (
    <div>
      {/* Header avec image de fond */}
      <div className="relative h-64 bg-amber-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">Contactez-nous</h1>
            <p className="text-xl">Nous sommes là pour répondre à vos questions</p>
          </div>
        </div>
      </div>

      {/* Contenu existant */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-serif mb-4">Informations</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-amber-800 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Adresse</h3>
                    <p className="text-gray-600">
                      L'Écho de Charbonnières<br />
                      123 rue de la Musique<br />
                      12345 Charbonnières
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-amber-800 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-700">Contact</h3>
                    <p className="text-gray-600">
                      Email: contact@echodecharbonnieres.fr<br />
                      Tél: 01 23 45 67 89
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaClock className="text-amber-800 text-xl mt-1" />
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
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="rejoindre">Rejoindre l'orchestre</option>
                  <option value="concert">Information sur un concert</option>
                  <option value="autre">Autre demande</option>
                </select>
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
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
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
