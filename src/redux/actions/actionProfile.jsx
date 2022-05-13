import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import {typeRegistration} from "../types/types.js";
import { google } from "../../firebase/Firebase.js";
import {collection, doc, getDoc, setDoc} from "firebase/firestore";
import {DB, facebook} from "../../firebase/Firebase.js";
import swal from 'sweetalert';


// const auth = getAuth();


// minuto 37  https://www.youtube.com/watch?v=1rLBjRF0ep0


// export const AddProfile = (user)=>{
//     return{
//         type: typeRegistration.register,
//         payload: user
//     }
// }

export const logoutAsync = ()=>{
    return(dispatch)=>{
        const auth= getAuth()
        signOut(auth)
        .then((user)=>{
            console.log('Hasta Pronto')
            dispatch(logout())
            
        })
        .catch(error=>{
            console.warn(error)
        })
    }
}

export const logout =()=>{
    return{
        type: typeRegistration.logout
    }
}

export const loginAsync = (email, password)=>{
    return(dispatch)=>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(({user})=>{
            dispatch(loginSync(user.email, user.password))
            console.log('Usuario autorizado (login Async)')
    })
    .catch(error=>{
        console.warn(error, 'No autorizado (login Async)')
        })
    }
}
export const loginSync =(user, pass)=>{
    return{
            type: typeRegistration.login,
            payload: { user, pass}
    }
}

export const loginGoogle = ()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google)
       .then(({user})=>{
            console.log(user, 'Usuario autorizado (Login Google)')
    })
        .catch(error=>{
            console.warn(error, 'No autorizado (Login Google)')
        })
    }
}

export const RegisterAsync = (email, password, Username) =>{
    return (dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
            console.log(user)
            await updateProfile(auth.currentUser, {displayName: Username})
            dispatch(RegisterSync(email, password, Username));
            swal("Bienvenido!", "Disfruta de todos nuestros contenidos", "success")
        })
        .catch(error=>{
            console.warn(error, swal("Verifica tu informacion!", "Aun no fuiste registrado verifica la informacion nuevamente", "error"))
        })



    }
}
export const RegisterSync = (email, password, Username)=>{
    return{
        type: typeRegistration.register,
        payload:{
            email, password, Username
        }
    }
}

export const loginFacebookAction = ()=>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, facebook)
        .then((user)=> console.log(user))
    }
}
