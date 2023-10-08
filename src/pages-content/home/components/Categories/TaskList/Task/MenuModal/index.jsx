import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveEditModal } from "../../../../../../../redux/slices/editTaskSlice";
import { fetchDeleteTask } from "../../../../../../../redux/slices/editTaskSlice";
import styles from "./styles.module.scss";

export const MenuModal = ({ taskItemId }) => {
  const dispatch = useDispatch();
  const { activeEditModal } = useSelector((state) => state.edit);

  const deleteTaskBackend = () => {
    try {
      dispatch(fetchDeleteTask({ taskItemId }));
    } catch (error) {
      console.log("Error", error);
      alert("Ошибка при удалении карточки");
    }
  };

  const handleOpenEditModal = () => {
    dispatch(setActiveEditModal(!activeEditModal));
  };

  return (
    <div className={styles.popup}>
      <p onClick={handleOpenEditModal}>Изменить</p>
      <p onClick={deleteTaskBackend}>Удалить</p>
      {/* {activeEditModal && (
        <ModalEdit>
          <FormEdit></FormEdit>
        </ModalEdit>
      )} */}
    </div>
  );
};
