import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  RiMusic2Line,
  RiMenuLine,
  RiCloseLine,
} from 'react-icons/ri'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => location.pathname === path

  return (
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
  )
}

export default Header 