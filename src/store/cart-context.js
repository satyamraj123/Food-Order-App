import react from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(item)=>{},
});

export default CartContext;