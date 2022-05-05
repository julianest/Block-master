import {typeRegistration} from "../types/types.js";
export const AddProfile = (user)=>{
    return{
        type: typeRegistration.register,
        payload: user
    }
}