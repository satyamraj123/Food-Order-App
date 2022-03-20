import react from "react";
import classes from './Modal.module.css';


const BackDrop=props=>{
    return <div className={classes.backdrop}></div>
}

const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal =props=>{
return <react.Fragment>
    <BackDrop/>
    <ModalOverlay>{props.children}</ModalOverlay>
</react.Fragment>
}

export default Modal;