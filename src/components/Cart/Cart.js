import react, { useContext,useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
const [isCheckout,setIsCheckout]=useState(false);
const cartItemRemoveHandler=(id)=>{
  ctx.removeItem(id);
}
const cartItemAddHandler=(item)=>{
  ctx.addItem(item);
}
const orderHandler=()=>{
  setIsCheckout(true);
}
  const cartitems = ctx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
      />
    );
  });
  const modalActions=<div className={classes.actions}>
  <button className={classes["button--alt"]} onClick={props.onCartClose}>
    Close
  </button>
  {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
</div>;
  return (
    <Modal onCartClose={props.onCartClose}>
      <ul className={classes["cart-items"]}>{cartitems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
     {isCheckout&&<Checkout onClose={props.onCartClose}/>} 
     {!isCheckout && modalActions}
      
    </Modal>
  );
};

export default Cart;
