export const Reducer = (action, state)=>{
    switch(action.type){
        case "CHANGE_EDU":
            return {...state, edu: !state.edu}
    }
}