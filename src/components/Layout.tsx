import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WatercolorBackground from './WatercolorBackground'

/**
 * Main Layout component that wraps all pages
 * Includes Header, Footer, and the base WatercolorBackground
 */
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <WatercolorBackground>
          <Outlet />
        </WatercolorBackground>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
