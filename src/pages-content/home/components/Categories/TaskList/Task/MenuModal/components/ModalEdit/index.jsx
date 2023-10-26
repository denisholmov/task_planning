import React from "react";
import {
  editSelector,
  setActiveEditModal,
} from "../../../../../../../../../redux/slices/editTaskSlice";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

export const ModalEdit = ({ children }) => {
  const classModal = styles.modal;
  const classActive = styles.active;

  const { activeEditModal } = useSelector(editSelector);

  return (
    <div
      className={
        activeEditModal ? `${classModal} ${classActive}` : `${classModal}`
      }
      onClick={() => setActiveEditModal(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
