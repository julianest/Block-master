import { Container, Card, Button, Modal } from "react-bootstrap";
import "../styles/index.css"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listFilmsAsync, searchFilmsSync } from "../redux/actions/actionPeliculas";
import "../styles/index.css";
import { Constantes } from "../helpers/constants";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../firebase/Firebase";



const Listar = () => {

    const dispatch = useDispatch();
    const { films } = useSelector(store => store.filmsStore)
    console.log(films)

    useEffect(() => {
        dispatch(listFilmsAsync()); //
    }, [dispatch])

    const handleModal = (e, nombreBuscar) => {
        console.log(e.target);
        
        }
    

    return (
        <>
            <Container>
                <div className="contImage">
                    {films.map((pelis, i) => (
                        <div key={pelis.id + i}>
                            <a href="#home" onClick={handleModal} id={pelis.id}>
                                <Card style={{ width: '150px', backgroundColor: "black", color: "white", textAlign: "center" }}>
                                    <Card.Img variant="top" src={Constantes.posterPath + pelis.imagePoster} />
                                    <Card.Body>
                                        <Card.Title>{pelis.title}</Card.Title>
                                        <Card.Text>
                                            {pelis.votation}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                            {/* <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{pelis.title} </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img src="" alt="" />
                                    <p>Todos los izquierdos reservados</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cerrar
                                    </Button>
                                </Modal.Footer>
                            </Modal> */}
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default Listar;