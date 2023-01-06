import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/webpage';
import Login from '../pages/login';

export default function Routing() {
    return (

        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/webpage" element={<Homepage />} />
        </Routes>
    )

}