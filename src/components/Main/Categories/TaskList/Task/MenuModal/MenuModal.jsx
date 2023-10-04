import React from "react";
import ModalEdit from "./ModalEdit/ModalEdit";
import FormEdit from "./FormEdit/FormEdit";
import { useDispatch, useSelector } from "react-redux";
import { setActiveEditModal } from "../../../../../../redux/slices/editTaskSlice";
import { fetchDeleteTask } from "../../../../../../redux/slices/editTaskSlice";
import classes from "./MenuModal.module.scss";

const MenuModal = ({ taskItemId }) => {
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

  //   const editTaskCard = ({ taskItemId }) => {
  //     try {
  //       dispatch(fetchEditCardTask({ taskItemId }));
  //     } catch (error) {
  //       console.log("Error", error);
  //       alert("Ошибка при удалении карточки");
  //     }
  //   };

  return (
    <div className={classes.popup}>
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

export default MenuModal;
