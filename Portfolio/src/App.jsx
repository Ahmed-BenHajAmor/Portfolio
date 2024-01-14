import React from 'react'
import { NavBar, Home, About, ScrollTop, Skills, Qualification } from './components'
import "./App.css"
 



function App() {

  return (
    <>
    <NavBar/>
    <div className="portfolio-body">
      <ScrollTop />
      <Home />
      <About />
      <Skills />
      <Qualification />
    </div>
    
    </>
  )
}

export default App