import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import PageTitle from './PageTitle'
import {
  RiMusic2Line,
  RiMenuLine,
  RiCloseLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiTimeLine,
  RiFacebookLine,
  RiInstagramLine,
} from 'react-icons/ri'

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Accueil'
      case '/about':
        return "L'Orchestre"
      case '/concerts':
        return 'Concerts'
      case '/contact':
        return 'Contact'
      default:
        return 'Page non trouvée'
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      <PageTitle title={getPageTitle()} />
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-serif flex items-center gap-2 text-amber-800">
              <RiMusic2Line className="w-8 h-8" />
              L'Écho de Charbonnières
            </Link>
            
            {/* Menu burger pour mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-amber-50 rounded-lg text-amber-800"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenuLine className="w-6 h-6" />
              )}
            </button>

            {/* Menu desktop */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`relative py-2 text-lg font-medium transition-colors
                    ${isActive('/') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                >
                  Accueil
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform transition-transform duration-300
                    ${isActive('/') ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`relative py-2 text-lg font-medium transition-colors
                    ${isActive('/about') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                >
                  L'orchestre
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform transition-transform duration-300
                    ${isActive('/about') ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </Link>
              </li>
              <li>
                <Link 
                  to="/concerts" 
                  className={`relative py-2 text-lg font-medium transition-colors
                    ${isActive('/concerts') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                >
                  Concerts
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform transition-transform duration-300
                    ${isActive('/concerts') ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`relative py-2 text-lg font-medium transition-colors
                    ${isActive('/contact') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                >
                  Contact
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform transition-transform duration-300
                    ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0'}`}
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu mobile */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <ul className="py-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className={`block text-lg font-medium transition-colors
                    ${isActive('/') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                  onClick={closeMenu}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block text-lg font-medium transition-colors
                    ${isActive('/about') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                  onClick={closeMenu}
                >
                  L'orchestre
                </Link>
              </li>
              <li>
                <Link
                  to="/concerts"
                  className={`block text-lg font-medium transition-colors
                    ${isActive('/concerts') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                  onClick={closeMenu}
                >
                  Concerts
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block text-lg font-medium transition-colors
                    ${isActive('/contact') 
                      ? 'text-amber-800' 
                      : 'text-gray-600 hover:text-amber-800'
                    }`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

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
    </div>
  )
}

export default Layout
