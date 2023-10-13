import React from "react";
import {
  editSelector,
  setActiveModal,
} from "../../../../../../../redux/slices/editTaskSlice";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

export const Modal = ({ children }) => {
  const classModal = styles.modal;
  const classActive = styles.active;

  const { activeModal } = useSelector(editSelector);

  return (
    <div
      className={activeModal ? `${classModal} ${classActive}` : `${classModal}`}
      onClick={() => setActiveModal(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
