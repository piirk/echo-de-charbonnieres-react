import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface RouteTitleMap {
  [key: string]: string
}

const routeTitleMap: RouteTitleMap = {
  '/': 'Accueil',
  '/about': "L'Orchestre",
  '/concerts': 'Concerts',
  '/contact': 'Contact',
}

function PageTitle() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const pageTitle = routeTitleMap[path]
    const baseTitle = 'Écho de Charbonnières'

    if (pageTitle) {
      document.title = `${baseTitle} | ${pageTitle}`
    } else {
      document.title = `${baseTitle} | Page non trouvée`
    }
  }, [location])

  return null
}

export default PageTitle
