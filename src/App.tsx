import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ConcertsPage from './pages/ConcertsPage'
import ContactPage from './pages/ContactPage'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="concerts" element={<ConcertsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Route>
    </Routes>
  )
}

export default App
