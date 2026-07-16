import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { IndustriesPage } from './pages/IndustriesPage'
import { IndustryDetailPage } from './pages/IndustryDetailPage'
import { CapabilitiesPage } from './pages/CapabilitiesPage'
import { CapabilityDetailPage } from './pages/CapabilityDetailPage'
import { InsightsPage } from './pages/InsightsPage'
import { InsightDetailPage } from './pages/InsightDetailPage'
import { AboutPage } from './pages/AboutPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/capabilities/:slug" element={<CapabilityDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
