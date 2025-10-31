
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Tours from './Pages/Tours'
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import ScrollToTop from 'react-scroll-to-top'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <ScrollToTop
        color="white"
        smooth
        style={{
          backgroundColor: '#EF4444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </>
  )
}

export default App
