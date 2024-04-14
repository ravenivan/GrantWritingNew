import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import About2 from './components/About2'
import Services from './components/Services'
import Series from './components/Series'
import SeriesBanner from './components/Series'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Different from './components/Different'

function App() {


  return (
    <>
      <Nav />
      <Home />
      <About />
      <About2 />
      <Services />
      <SeriesBanner />
      <Different />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
