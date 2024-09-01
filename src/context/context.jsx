import { createContext, useState } from 'react'

export const CarritoContext = createContext()

export const Provider = ({ children }) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [cartCounts, setCartCounts] = useState(new Map());

    const addToCart = (product) => {
        {/*Actualizamos el conteo de los productos*/}
        const newCounts = new Map(cartCounts); 

        if (newCounts.has(product.id)) {
            newCounts.set(product.id, newCounts.get(product.id) + 1);
        } else {
            newCounts.set(product.id, 1);
            setCartItems(prevItems=>[...prevItems,product ])
        }
        setCartCounts(newCounts);
    };
    
    return(
        <CarritoContext.Provider value={[cartItems, cartCounts, addToCart]} >
            { children }
        </CarritoContext.Provider>
    )
}
