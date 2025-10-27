export const Reducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_EDU":
            return {...state, edu: action.value}
        case "CHANGE_RES_NAV":
            return {...state, isResponsiveNavBarOpen: !state.isResponsiveNavBarOpen} 
        case "CHANGE_HARD_SKILL":
            return {...state, hardSkills: action.value} 
        case "CLOSE_PROJECT_DETAILS_STATE":
            return {...state, isProjectDetailsOpen: false, projectDetails: null}    
        case "OPEN_PROJECT_DETAILS_STATE":
            return {...state, isProjectDetailsOpen: true, projectDetails: action.value}            
        default:
            return state    
    }
}