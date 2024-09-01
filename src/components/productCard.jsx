import React from 'react';
import { toast } from "sonner"

function ProductCard({ product, addToCart }) {
    
    return (
        <div className="tarjeta">
            <div className="imagen">
                <img src={product.imagen} alt={product.nombre} />
            </div>
            <div className="texto">
                <h4>{product.nombre}</h4>
                <p>{product.descripcion}</p>
                <div className="precio">
                    <span>{product.precio}</span>
                    <button className="btn-agregar" onClick={() =>{
                        try {
                            addToCart(product)
                            toast.success('Agregado con éxito', {
                              description: `Has agregado el producto ${ product.name } al carrito`
                            })
                          } catch (e) {
                            toast.error('Hubo un error', {
                              description: 'No se logró agregar el producto :('
                            })
                            console.error(e)
                          }
                    }
                    }>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;