import React, {useReducer} from 'react'
import { NavBar, Home, About, ScrollTop, Skills, Qualification } from './components'
import "./App.css"
import { createContext } from 'react'
import { Reducer } from './Reducer' 
import { FaDisplay } from 'react-icons/fa6'

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
      </div>
    </myContext.Provider>
    
    
    </>
  )
}

export default App