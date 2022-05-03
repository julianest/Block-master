import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Icon from '../assets/marker.png'
// import { Icon } from 'leaflet'
import '../styles/Map.css';

const position = [4.7098241,-74.0778432]

const ChartMap = () => {
    return (
        <>
        <div><h3 style={{textAlign:"center"}} >Encuentranos en la siguiente Ubicacion</h3></div>
        
            <MapContainer center={position} zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} >
                    <Popup> Guappjalotes</Popup>
                </Marker>
            </MapContainer>
        
        </>
    );
};
export default ChartMap;

//Para poder utilizarse debe instalarse primero la libreria de react con el siguiente comando:
// npm install react-leaflet
//una vez instalado se debe dejar esta hoja como componente y agregarse en la hoja que se valla a renderizar

//como una importacion normal
//import ChartMap from "../components/Map";
//y en el return <ChartMap/>

//Adicionalmente es necesario crearle un Map.css para el estilo
//debe contener esta clase: 
//.leaflet-container {width: 100%;height: 500px;}
//e importarlo en el Map.jsx import '../styles/Map.css';


