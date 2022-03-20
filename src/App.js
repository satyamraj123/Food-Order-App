import react,{useState} from "react";
import Cart from "./components/Cart/Cart.js";
import Header from './components/Layout/Header.js';
import Meals from "./components/Meals/Meals.js";
import CartProvider from "./store/CartProvider.js";
function App() {
  const [cartIsVisible,setCartIsVisible]=useState(false);
  const toggleCarthandler=()=>{
    setCartIsVisible((prv)=>{
return !prv;
    })
  }
  return (
    <CartProvider>
      {cartIsVisible&&<Cart onCartClose={toggleCarthandler}/>}
      <Header onCartClick={toggleCarthandler}/>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
