import React, {useReducer} from 'react'
import { NavBar, Home, About, ScrollTop, Skills, Qualification, Projects, Footer } from './components'
import "./App.css"
import { createContext } from 'react'
import { Reducer } from './Reducer' 
import ProjectDescription from './components/Projects/ProjectsMainContent/ProjectDescription'

export const myContext = createContext()


function App() {
  const [state, dispatch] = useReducer(Reducer,
        {
          edu: false,
          isResponsiveNavBarOpen: false,
          hardSkills: "Backend",
          projectDetails: null,
          isProjectDetailsOpen: false
        }
  )

  return (
    <>
    
    <myContext.Provider value={{dispatch, state}}>
        <NavBar/>
        <ScrollTop />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Footer />
        {state.isProjectDetailsOpen && <ProjectDescription onClose={()=> dispatch({type :"CLOSE_PROJECT_DETAILS_STATE"})} projectData={state.projectDetails}/>}
    </myContext.Provider>
    
    
    </>
  )
}

export default App