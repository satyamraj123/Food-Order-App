import react from "react";
import classes from './Input.module.css';
//all the key value pairs in props.input object will be added in input element
//object destructring
const Input=props=>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>
{props.label}
        </label>
        <input {...props.input}></input>
    </div>
}

export default Input;