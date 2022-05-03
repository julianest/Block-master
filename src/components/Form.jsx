// import axios from 'axios';
import React from 'react';
import { useState } from 'react';
// import { fileUpload } from '../helpers/fileUpload';
// import { url } from '../helpers/url';
// import '../styles/Form.css'

const Form = () => {
const [estudiantes, setEstudiantes] = useState({
  nombre: "",
  tipo: "",
  numero: "",
  telefono: "",
  celular: "",
  direccion: "",
  imagen: ""
});

//vemos los cambios en tiempo real para ello se usa en cada input un evento onChange
const handleChange = ({target}) =>{
    setEstudiantes({
      ...estudiantes,
      //con target.name buscamos directamente por el input la propiedad no usando asi un for in.
      [target.name]: target.value
      //con llaves se puede acceder forma dinamica a la propiedad de un objeto
    })
    console.log(estudiantes);
}

//para subir las fotos a cloudinary
const handleFileChangeImg = ({target})=>{
  // const fileImg = target.files[0];
  // console.log(fileImg);
  // fileUpload(fileImg)
  // .then(response =>{
  //   estudiantes.imagen = response
  // }).catch(error => console.log(error))
}

const handleSubmit = (e)=>{
  e.preventDefault();
  // axios.post(url, estudiantes)
  // .then(response => console.log(response))
  // .catch((error)=>console.log(error))
}
  return (
    <main>
        <form id='form' onSubmit={handleSubmit} className='form'>
            <h2>Registro de Estudiantes</h2>
            <hr />
            {/* Nombre */}
            <label>Nombre Completo <input type="text" id='inputNombre' name='nombre' onChange={handleChange} /></label>
            <br />
            {/* Documento */}
            <label>Tipo de documento 
                <select name="tipo" id="selectTipo" onChange={handleChange}>
                    <option value="null" name='seleccionar'>Seleccionar</option>
                    <option value="C.C" name='C.C'>C.C</option>
                    <option value="T.I" name='T.I'>T.I</option>
                    <option value="C.E" name='C.E'>C.E</option>
                </select>
            </label>
            <br />
            <label>Número de documento <input type="number" name='numero' onChange={handleChange} id='inputNumero' min={0} /></label>
            <br />
            {/* Teléfono */}
            <label>Teléfono <input type="tel" name='telefono'  onChange={handleChange} id='inputTelefono' /></label>
            <br />
            {/* Celular */}
            <label>Celular <input type="tel" name='celular'  onChange={handleChange} id='inputCelular' /></label>
            <br />
            {/* Dirección */}
            <label>Dirección <input type="text" name='direccion'  onChange={handleChange} id='inputDireccion' /></label>
            <br />
            {/* Imagen */}
            <label>Imagen <input type="file" onChange={handleFileChangeImg} name='imagen' id='btnImagen' /></label>

            <button id='btnRegistro'>Enviar</button>
        </form>
    </main>
  )
}

export default Form