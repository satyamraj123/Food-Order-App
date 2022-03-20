import react from "react";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartitems = [{ id: "ss", name: "sss", amount: "2", price: 12.99 }].map(
    (item) => {
      return <li>{item.name}</li>;
    }
  );
  return (
    <div>
      <ul className={classes["cart-items"]}>{cartitems}</ul>
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>12</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
