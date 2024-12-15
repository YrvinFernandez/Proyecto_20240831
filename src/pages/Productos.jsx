import React from 'react'
import { useContext, useState, useEffect } from "react"
import { CarritoContext } from '../context/context'

import ProductCard from '../components/productCard'

const Productos=()=>{
    const [, , addToCart] = useContext(CarritoContext)
    const [data, setData] = useState([]);

    useEffect(() => {
        // Función asíncrona para obtener datos
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/tienda/productos/');
            if (!response.ok) {
                throw new Error('Network response for categories was not ok');
            }
            const result = await response.json();
            console.log("Datos obtenidos:", result);
            setData(result.results || []); // Actualizar el estado con los datos obtenidos
          } catch (error) {
            console.error("Error al obtener los datos:", error);
          }
        };
        fetchData(); // Llamar la función asíncrona
    }, [setData]);

    return(
        <div className="principal">
            <main id='contenido'>
            {data.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} /> 
            ))}
            </main> 
        </div>
    )
}
export default Productos