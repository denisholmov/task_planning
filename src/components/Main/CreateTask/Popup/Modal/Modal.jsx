import React from "react";
import { setActiveModal } from "../../../../../redux/slices/editTaskSlice";
import classes from "./Modal.module.scss";
import { useSelector } from "react-redux";

const Modal = ({ children }) => {
  const classModal = classes.modal;
  const classActive = classes.active;

  const { activeModal } = useSelector((state) => state.edit);

  return (
    <div
      className={activeModal ? `${classModal} ${classActive}` : `${classModal}`}
      onClick={() => setActiveModal(false)}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {/* Смотреть урок модальное окно, помоему на канале ulbi tv */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
