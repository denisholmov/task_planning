import React from "react";
import classes from "./Modal.module.scss";

const Modal = ({ activeModal, setActiveModal, children }) => {
  const classModal = classes.modal;
  const classActive = classes.active;

  return (
    <div
      className={activeModal ? `${classModal} ${classActive}` : `${classModal}`}
      onClick={() => setActiveModal(false)}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
