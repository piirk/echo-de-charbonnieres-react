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

  return (
    <div className="min-h-screen flex flex-col">
      <PageTitle title={getPageTitle()} />
      <header className="bg-amber-800 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-serif flex items-center gap-2">
              <RiMusic2Line className="w-8 h-8" />
              L'Écho de Charbonnières
            </Link>
            
            {/* Menu burger pour mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-amber-700 rounded-lg"
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
                <Link to="/" className="hover:text-amber-200 text-lg">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-200 text-lg">
                  L'orchestre
                </Link>
              </li>
              <li>
                <Link to="/concerts" className="hover:text-amber-200 text-lg">
                  Concerts
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-200 text-lg">
                  Contact
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
                  className="block hover:text-amber-200 text-lg"
                  onClick={closeMenu}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block hover:text-amber-200 text-lg"
                  onClick={closeMenu}
                >
                  L'orchestre
                </Link>
              </li>
              <li>
                <Link
                  to="/concerts"
                  className="block hover:text-amber-200 text-lg"
                  onClick={closeMenu}
                >
                  Concerts
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block hover:text-amber-200 text-lg"
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

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">L'Écho de Charbonnières</h3>
              <p className="text-gray-300">
                Orchestre harmonique de campagne
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <RiMailLine className="w-5 h-5" />
                  contact@echodecharbonnieres.fr
                </p>
                <p className="flex items-center gap-2">
                  <RiPhoneLine className="w-5 h-5" />
                  01 23 45 67 89
                </p>
                <p className="flex items-center gap-2">
                  <RiMapPinLine className="w-5 h-5" />
                  123 rue de la Musique, Charbonnières
                </p>
                <p className="flex items-center gap-2">
                  <RiTimeLine className="w-5 h-5" />
                  Répétitions : Mardis 20h-22h
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <RiFacebookLine className="w-5 h-5" />
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <RiInstagramLine className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} L'Écho de Charbonnières. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
