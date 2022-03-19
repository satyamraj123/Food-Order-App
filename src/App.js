import react from "react";
import Header from './components/Layout/Header.js';
import Meals from "./components/Meals/Meals.js";
function App() {
  return (
    <react.Fragment>
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </react.Fragment>
  );
}

export default App;
