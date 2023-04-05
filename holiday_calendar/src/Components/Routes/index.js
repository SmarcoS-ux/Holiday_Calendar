import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from '../Pages/Main/';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}