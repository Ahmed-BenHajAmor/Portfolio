export const Reducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_EDU":
            return {...state, edu: action.value}
        default:
            return state    
    }
}