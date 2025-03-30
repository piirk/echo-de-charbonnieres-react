import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import PageTitle from './PageTitle'

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageTitle />
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center relative">
            <div className="text-xl font-bold">
              Écho de Charbonnières
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-700 rounded"
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
            <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4 absolute md:relative top-full md:top-auto right-0 md:right-auto w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}>
              <li className="py-2 md:py-0">
                <Link to="/" className="hover:text-gray-300 block" onClick={closeMenu}>
                  Accueil
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/about" className="hover:text-gray-300 block" onClick={closeMenu}>
                  L'Orchestre
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/concerts" className="hover:text-gray-300 block" onClick={closeMenu}>
                  Concerts
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/contact" className="hover:text-gray-300 block" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Écho de Charbonnières</p>
      </footer>
    </div>
  )
}

export default Layout
