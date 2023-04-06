import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from '../Pages/Main/';
import App from '../../App.js';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    );
}