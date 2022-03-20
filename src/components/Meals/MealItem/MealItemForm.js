import react, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmountString = amountInputRef.current.value.trim();
    const enteredAmountInteger = +enteredAmountString;
    if (enteredAmountString.length === 0||
      enteredAmountInteger < 1 ||
      enteredAmountInteger > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountInteger);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please Enter a valid Amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
