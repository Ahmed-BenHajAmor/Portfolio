export const Reducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_EDU":
            return {...state, edu: action.value}
        case "CHANGE_RES_NAV":
            return {...state, isResponsiveNavBarOpen: !state.isResponsiveNavBarOpen}    
        default:
            return state    
    }
}