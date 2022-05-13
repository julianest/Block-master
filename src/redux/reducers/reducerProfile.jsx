import { typeRegistration } from "../types/types.js";

// const initialState = {
//     user: []
// }

export const reducerProfile = (state = {}, action) => {
    switch (action.type) {
        case typeRegistration.login:
            return {
                user: action.payload.user,
                pass: action.payload.pass
                // user: [...state.user, action.payload]
            }
        case typeRegistration.register:
            return {
                email: action.payload.email,
                pass: action.payload.pass,
                name: action.payload.name,
            }
        case typeRegistration.logout:
            return {
            }

        default:
            return state
    }
}
