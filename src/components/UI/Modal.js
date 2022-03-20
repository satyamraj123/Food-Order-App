import react from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <react.Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={props.onCartClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </react.Fragment>
  );
};

export default Modal;
