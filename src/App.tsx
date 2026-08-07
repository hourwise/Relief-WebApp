import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Gdpr from '@/pages/Gdpr'
import Contact from '@/pages/Contact'
import Support from '@/pages/Support'
import AddFacility from '@/pages/AddFacility'
import ReportBug from '@/pages/ReportBug'
import BlogIndex from '@/pages/BlogIndex'
import Press from '@/pages/Press'
import Social from '@/pages/Social'
import NotFound from '@/pages/NotFound'
import { ROUTES } from '@/lib/config'

/**
 * Main App component with routing
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Main routes */}
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.privacy} element={<Privacy />} />
          <Route path={ROUTES.terms} element={<Terms />} />
          <Route path={ROUTES.gdpr} element={<Gdpr />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.support} element={<Support />} />
          <Route path={ROUTES.addFacility} element={<AddFacility />} />
          <Route path={ROUTES.reportBug} element={<ReportBug />} />
          <Route path={ROUTES.blog} element={<BlogIndex />} />
          <Route path={ROUTES.press} element={<Press />} />
          <Route path={ROUTES.social} element={<Social />} />

          {/* TODO: Implement in Phase 4 */}
          {/* <Route path={ROUTES.blogPost} element={<BlogPost />} /> */}

          {/* 404 - must be last */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


