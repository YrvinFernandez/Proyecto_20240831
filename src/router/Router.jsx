import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Provider } from '../context/context'
import Carrito from '../pages/Carrito'
import Productos from "../pages/Productos";

const Router =()=>{
    return(
        <Provider>
            <Routes>
                <Route path="/" element={<Productos/>} />
                <Route path="carrito" element={<Carrito/>} />
            </Routes>
        </Provider>
    ) 
}
export default Router