import React from "react";
import classes from "./ModalEdit.module.scss";
import { setActiveEditModal } from "../../../../../../../redux/slices/editTaskSlice";
import { useSelector } from "react-redux";

const ModalEdit = ({ children }) => {
  const classModal = classes.modal;
  const classActive = classes.active;

  const { activeEditModal } = useSelector(
    (state) => state.edit.activeEditModal
  );

  return (
    <div
      className={
        activeEditModal ? `${classModal} ${classActive}` : `${classModal}`
      }
      onClick={() => setActiveEditModal(false)}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalEdit;
