import React, {useReducer} from 'react'
import { NavBar, Home, About, ScrollTop, Skills, Qualification, Projects } from './components'
import "./App.css"
import { createContext } from 'react'
import { Reducer } from './Reducer' 

export const myContext = createContext()


function App() {
  const [state, dispatch] = useReducer(Reducer,
     {edu: true,
      isResponsiveNavBarOpen: false
     }
     )
  return (
    <>
    <NavBar/>
    <myContext.Provider value={{dispatch, state}}>
        <ScrollTop />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
    </myContext.Provider>
    
    
    </>
  )
}

export default App