import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import PageTitle from './PageTitle'

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
            <Link to="/" className="text-2xl font-serif">
              L'Écho de Charbonnières
            </Link>
            
            {/* Menu burger pour mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-amber-700 rounded-lg"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Menu desktop */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link to="/" className="hover:text-amber-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-200">
                  L'orchestre
                </Link>
              </li>
              <li>
                <Link to="/concerts" className="hover:text-amber-200">
                  Concerts
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-200">
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
                  className="block hover:text-amber-200"
                  onClick={closeMenu}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block hover:text-amber-200"
                  onClick={closeMenu}
                >
                  L'orchestre
                </Link>
              </li>
              <li>
                <Link
                  to="/concerts"
                  className="block hover:text-amber-200"
                  onClick={closeMenu}
                >
                  Concerts
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block hover:text-amber-200"
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
              <p className="text-gray-300">
                Email: contact@echodecharbonnieres.fr<br />
                Tél: 01 23 45 67 89
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
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
