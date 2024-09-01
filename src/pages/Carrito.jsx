import React from 'react'
import { useContext } from "react"
import { CarritoContext } from '../context/context'


const Carrito=()=>{
    const [cartItems, cartCounts] = useContext(CarritoContext)
    const total = cartItems.reduce((acc, item) => {
        const cant = cartCounts.get(item.id);
        return acc + (item.precio * cant);
    }, 0);

    return(
        <div className="carrito">
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>SubTotal</th>
                </tr>
            </thead>
            <tbody id="tbody-carrito">
                {cartItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{cartCounts.get(item.id)}</td>
                        <td>{item.precio}</td>
                        <td>{item.precio * cartCounts.get(item.id)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot id="tfooter-carrito">
                <tr>
                    <td colSpan="3">Total</td>
                    <td id="tfooter-cart">{total}</td>
                </tr>
            </tfoot>
        </table>
        <div className="resumen">
            <table>
                <tbody id="tbody-resumen"></tbody>
            </table>
            <button id="btn-pagar">PAGAR ORDEN</button>
        </div>
    </div>
    )
}
export default Carrito