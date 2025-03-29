import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                À Propos
              </Link>
            </li>
            <li>
              <Link to="/concerts" className="hover:text-gray-300">
                Concerts
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
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
