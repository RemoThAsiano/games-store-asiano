import { createContext, useState } from "react";


const CartContext = createContext ({
    products: []
});

export const CartContextProvider = ({ children }) => {
    const [productsList, setProductsList] = useState([]);

    const addProduct = (product) => {
        setProductsList([product,...productsList])
    }

    const removeProduct = (id) => {
        setProductsList(productsList.filter(i => i.id !== id))
    }
    
    const removeAll = () => {
        setProductsList([])
    }

    const isInCart = (id) => {

    }

    const getCartQuiantity = () => {
        
    }

    return (
        <CartContext.Provider value={{
            products: productsList,
            addProduct,
            removeProduct,
            removeAll,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;