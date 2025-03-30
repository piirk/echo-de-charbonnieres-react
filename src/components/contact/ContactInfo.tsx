import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-serif mb-6">Informations de contact</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <FaMapMarkerAlt className="text-amber-800 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Adresse</h3>
            <p className="text-gray-600">
              123 Rue de la Musique<br />
              69260 Charbonnières-les-Bains
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <FaPhone className="text-amber-800 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Téléphone</h3>
            <p className="text-gray-600">04 78 XX XX XX</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <FaEnvelope className="text-amber-800 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-600">contact@echodecharbonnieres.fr</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <FaClock className="text-amber-800 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Horaires</h3>
            <p className="text-gray-600">
              Lundi - Vendredi : 9h - 18h<br />
              Samedi : 9h - 12h<br />
              Dimanche : Fermé
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo 