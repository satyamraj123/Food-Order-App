import react from "react";
import Cart from "./components/Cart/Cart.js";
import Header from './components/Layout/Header.js';
import Meals from "./components/Meals/Meals.js";
function App() {
  return (
    <react.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </react.Fragment>
  );
}

export default App;
