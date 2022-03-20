import react, { useContext, useEffect,useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [buttonIsBump, setButtonIsBump] = useState(false);
  const ctx = useContext(CartContext);
  const items=ctx.items;
  const numberofCartitems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  const buttonclasses = `${styles.button} ${buttonIsBump?styles.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsBump(true);
    const timer = setTimeout(() => {
      setButtonIsBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={buttonclasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberofCartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
