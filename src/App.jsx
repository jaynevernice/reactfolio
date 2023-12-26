import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Pricing from './components/pricing/Pricing'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import bgm from './assets/bgm.mp3'

function App() {
  return (
    <main className="main">

      <audio src={bgm} autoPlay loop />

      <Header />
      <Home />
      <Resume />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default App
