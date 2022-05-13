// import AgregarCita from '../componente/AgregarCita';
// import Listar from '../componente/Listar';
// import Add from '../componente/CRUD/Add'
// import List from '../componente/CRUD/List'
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import NavbarP from '../components/NavbarP';

const LandingRoutes = () => {
    return (
        <>
        <NavbarP/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default LandingRoutes;