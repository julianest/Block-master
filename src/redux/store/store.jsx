import { combineReducers, createStore } from "redux";
import { reducerProfile } from "../reducers/reducerProfile";


const reducers = combineReducers({
    user: reducerProfile

})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)