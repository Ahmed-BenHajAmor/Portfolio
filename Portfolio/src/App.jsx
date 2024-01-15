import React, {useReducer} from 'react'
import { NavBar, Home, About, ScrollTop, Skills, Qualification, Projects } from './components'
import "./App.css"
import { createContext } from 'react'
import { Reducer } from './Reducer' 

export const myContext = createContext()


function App() {
  const [state, dispatch] = useReducer(Reducer, {edu: true})
  return (
    <>
    <NavBar/>
    <myContext.Provider value={{dispatch, state}}>
      <div className="portfolio-body">
        <ScrollTop />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
      </div>
    </myContext.Provider>
    
    
    </>
  )
}

export default App