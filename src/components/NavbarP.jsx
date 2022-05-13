import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/actionProfile";
import "../styles/index.css";



const NavbarP = () => {
    
    const dispatch = useDispatch()


    return (
        <>
            <Navbar bg="dark" expand="md" >
                <Container fluid>
                    <Navbar.Brand href="#"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651537312/Block-Master/logo_ae8sth.svg" alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "white" }} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navLinks"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/home" style={{ color: "white" }}>Home</Nav.Link>
                            <Nav.Link href="/contact" style={{ color: "white" }}>Contact</Nav.Link>
                            <Nav.Link href="#home" onClick={() => dispatch(logoutAsync())} style={{ color: "white" }}>Logout</Nav.Link>
                        </Nav>
                        <Form className="d-flex" >
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarP;