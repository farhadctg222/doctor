import React from 'react';
import { Outlet } from 'react-router-dom';
import Foter from '../Routs/Componet/Foter';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default Main;