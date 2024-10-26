import { createContext,useReducer,useContext } from "react";
import reducer from "../reducer/cartReducer";


const CartContext = createContext();

const initialState = {
    cart: [],
    total_item:" ",
    total_amount: 0,
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart=(item_id, amount, curElem)=>{
        dispatch({type:"ADD_TO_CART", payload:{item_id, amount, curElem}})
    }

    return (<CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>);
}
const useCartContext = () => {
    return useContext(CartContext);
}
export{CartProvider, useCartContext}