import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "../styles/index.css";


const NavbarP =()=> {
  return (
    <>
        <Navbar bg="dark" expand="md" >
            <Container fluid>
                <Navbar.Brand href="#"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651537312/Block-Master/logo_ae8sth.svg" alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"  style={{backgroundColor: "white"}}  />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px', color:"white" }}
                    navbarScroll
                >
                    <Nav.Link href="#action1" className="lite" style={{color: "white"}} >Home</Nav.Link>
                    <Nav.Link href="#action2" style={{color: "white"}}>Link</Nav.Link>
                    
                </Nav>
                <Form className="d-flex">
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