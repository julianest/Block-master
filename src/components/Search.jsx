import { useFormik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { searchFilmsAsync } from '../redux/actions/actionPeliculas';
import Listar from './Listar';



const Search = () => {
    
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            search:''},
        validationSchema: Yup.object({
            search: Yup.string().required('campo requerido')
        }),
        onSubmit: ({search})=>{
            console.log(search)
            dispatch(searchFilmsAsync(search))
        }
    })

    return (
        <div>
            <center>
            <form onSubmit={formik.handleSubmit}>
                <input name="search" placeholder="Buscar por Nombre Pelicula" onChange={formik.handleChange}/>
                <Button type="submit">Search</Button>
            </form>
            <Listar/>
            </center>
        </div>
    );
};

export default Search;