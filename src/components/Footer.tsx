import React from 'react'
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiTimeLine,
  RiFacebookLine,
  RiInstagramLine,
} from 'react-icons/ri'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif text-amber-800 mb-6">L'Écho de Charbonnières</h3>
            <p className="text-gray-600">
              Orchestre harmonique de campagne
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-amber-800 mb-6">Contact</h3>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-3">
                <RiMailLine className="w-5 h-5 text-amber-700" />
                contact@echodecharbonnieres.fr
              </p>
              <p className="flex items-center gap-3">
                <RiPhoneLine className="w-5 h-5 text-amber-700" />
                01 23 45 67 89
              </p>
              <p className="flex items-center gap-3">
                <RiMapPinLine className="w-5 h-5 text-amber-700" />
                123 rue de la Musique, Charbonnières
              </p>
              <p className="flex items-center gap-3">
                <RiTimeLine className="w-5 h-5 text-amber-700" />
                Répétitions : Mardis 20h-22h
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif text-amber-800 mb-6">Suivez-nous</h3>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-600 hover:text-amber-700 transition-colors flex items-center gap-2"
              >
                <RiFacebookLine className="w-5 h-5" />
                Facebook
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-amber-700 transition-colors flex items-center gap-2"
              >
                <RiInstagramLine className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} L'Écho de Charbonnières. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 