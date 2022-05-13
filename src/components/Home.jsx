// import TraerApi from "./TraerApi";
import { Container, Button, Modal } from "react-bootstrap";
import "../styles/index.css"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listFilmsAsync } from "../redux/actions/actionPeliculas";
import "../styles/index.css";
import CarouselP from "./Carousel";
import Listar from "./Listar";


const Home = () => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const { films } = useSelector(store => store.filmsStore)
  console.log(films)

  useEffect(() => {
    dispatch(listFilmsAsync()); //
  }, [dispatch])

  // const editar = (peli) => {
  //     setModal(true)
  //     setDatos(peli)
  // }
const handleModal = (e)=>{
  console.log(e);
}


  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <h1>Home</h1>
      </div>
      <CarouselP/>

      <Container>
        <h2 className="blockMaster" style={{ textAlign: "start" }} >Todas las Peliculas</h2>
        
        <Listar/>
      </Container>
    </>
  );
}

export default Home;