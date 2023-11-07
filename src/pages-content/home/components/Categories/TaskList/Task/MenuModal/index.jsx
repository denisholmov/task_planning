import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalEdit } from "./components/ModalEdit";
import { FormEdit } from "./components/FormEdit";
import {
  setActiveEditModal,
  setTextTaskForEditFormInput,
  setTitleTaskForEditFormInput,
  setCategoryIdForEditFormTask,
} from "../../../../../../../redux/slices/editTaskSlice";
import { fetchDeleteTask } from "../../../../../../../redux/slices/editTaskSlice";
import styles from "./styles.module.scss";

export const MenuModal = ({ taskItemId }) => {
  const dispatch = useDispatch();
  const { activeEditModal, entireTaskList } = useSelector(
    (state) => state.edit
  );

  const deleteTaskBackend = () => {
    try {
      dispatch(fetchDeleteTask({ taskItemId }));
    } catch (error) {
      console.log("Error", error);
      alert("Ошибка при удалении карточки");
    }
  };

  //   if (successfulRequestMethodDelete) {
  //     dispatch(fetchTasks());
  //     dispatch(setSuccessfulRequestMethodDelete(false));
  //   }

  const handleOpenEditModal = () => {
    dispatch(setActiveEditModal(true));
    dispatch(
      setTextTaskForEditFormInput(
        entireTaskList.find((obj) => obj.id === taskItemId).text
      )
    );
    dispatch(
      setTitleTaskForEditFormInput(
        entireTaskList.find((obj) => obj.id === taskItemId).title
      )
    );
    dispatch(
      setCategoryIdForEditFormTask(
        entireTaskList.find((obj) => obj.id === taskItemId).category
      )
    );
  };

  return (
    <div className={styles.popup}>
      <p onClick={handleOpenEditModal}>Изменить</p>
      <p onClick={deleteTaskBackend}>Удалить</p>
      {activeEditModal && (
        <ModalEdit>
          <FormEdit taskItemId={taskItemId}></FormEdit>
        </ModalEdit>
      )}
    </div>
  );
};
