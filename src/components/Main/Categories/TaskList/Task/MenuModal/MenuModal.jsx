import React from "react";
import { useDispatch } from "react-redux";
import { fetchDeleteTask } from "../../../../../../redux/slices/editTaskSlice";
import classes from "./MenuModal.module.scss";

const MenuModal = ({ taskItemId }) => {
  const dispatch = useDispatch();

  const deleteTaskBackend = () => {
    try {
      dispatch(fetchDeleteTask({ taskItemId }));
    } catch (error) {
      console.log("Error", error);
      alert("Ошибка при удалении карточки");
    }
  };

  return (
    <div className={classes.popup}>
      <p>Изменить</p>
      <p onClick={deleteTaskBackend}>Удалить</p>
    </div>
  );
};

export default MenuModal;
