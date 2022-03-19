import react from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Card from "../UI/Card";
const Meals = (props) => {
  return (
    <>
     
      <MealsSummary></MealsSummary>
   
        <AvailableMeals></AvailableMeals>
        
    </>
  );
};

export default Meals;
