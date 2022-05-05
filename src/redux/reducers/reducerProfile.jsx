import {typeRegistration} from "../types/types.js";

const initialState = {
    user:[]
}

export const reducerProfile = (state = initialState, action)=>{
    switch (action.type) {
        case typeRegistration.register:
            return{
                user: [...state.user, action.payload]
            }
    
        default:
            return state
    }
}
