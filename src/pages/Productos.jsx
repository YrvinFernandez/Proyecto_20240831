import React from 'react'
import { useContext } from "react"
import { CarritoContext } from '../context/context'
import data from '../data/data'
import ProductCard from '../components/productCard'

const Productos=()=>{
    const [, , addToCart] = useContext(CarritoContext)

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