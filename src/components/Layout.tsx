import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PageTitle from './PageTitle'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <PageTitle title={getPageTitle()} />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
