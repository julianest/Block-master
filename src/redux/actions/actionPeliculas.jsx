import { collection, getDocs, query, where } from "firebase/firestore"
import { DB } from "../../firebase/Firebase"
import { typePeliculas } from "../types/types"


export const listFilmsAsync = () => {
    return async (dispath) => {
        const collectionListar = await getDocs(collection(DB, "peliculas"))
        console.log(collectionListar)
        const films = []
        collectionListar.forEach(lista => {
            films.push({
                ...lista.data()
            })
        })
        dispath(listFilmsSync(films))
    }
}

export const listFilmsSync = (film) => {
    return {
        type: typePeliculas.list,
        payload: film
    }
}


export const searchFilmsAsync = (nombreBuscar)=>{
    return async (dispatch)=>{
        const collectionListar = collection(DB, "peliculas")
        const q = query(collectionListar, where('title', '>=', nombreBuscar), where('title', '<=', nombreBuscar + '~'))
        const q2 = query(collectionListar, where('title', '==', `${nombreBuscar}`), where('title', '>=', `${nombreBuscar}`), where('title', '<=', `${nombreBuscar}`))
        const datosQ = await getDocs(q2)

        const film =[]
        datosQ.forEach((docu =>{
            film.push(docu.data())
        }))
        dispatch(searchFilmsSync(film))

    }

}
export const searchFilmsSync = (film)=>{
    return{
        type: typePeliculas.search,
        payload: film
    }

}