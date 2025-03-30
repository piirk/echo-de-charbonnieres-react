import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ConcertsPage from './pages/ConcertsPage'
import ContactPage from './pages/ContactPage'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="concerts" element={<ConcertsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
