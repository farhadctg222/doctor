import React from 'react';
import { Outlet } from 'react-router-dom';
import Foter from '../Routs/Componet/Foter';
import Navbar from '../Routs/Componet/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default Main;