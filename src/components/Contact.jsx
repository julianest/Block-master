import React from 'react';
import { Container } from 'react-bootstrap';
import "../styles/index.css";
import BlockMasterTitle from './BlockMasterTitle';
import Search from './Search';

const Contact = () =>{

   
    return (
        <>
           
            <BlockMasterTitle/>
            <Container>
            <h1 className="blockMaster">Encuentranos</h1>
                
            {/* <Search/> */}
            
            </Container>

        </>
    )
}

export default Contact;