import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  editSelector,
  fetchEditTask,
} from "../../../../../../../../../redux/slices/editTaskSlice";

import {
  setActiveEditModal,
  setTitleTaskForEditFormInput,
  setTextTaskForEditFormInput,
} from "../../../../../../../../../redux/slices/editTaskSlice";

import styles from "./styles.module.scss";

export const FormEdit = ({ taskItemId }) => {
  const {
    titleTaskForEditFormInput,
    textTaskForEditFormInput,
    categoryIdForEditFormTask,
  } = useSelector(editSelector);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setTitleTaskForEditFormInput(event.target.value));
  };

  const handleTextareaChange = (event) => {
    dispatch(setTextTaskForEditFormInput(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      dispatch(
        fetchEditTask({
          taskItemId,
          titleTaskForEditFormInput,
          textTaskForEditFormInput,
          categoryIdForEditFormTask,
        })
      );
    } catch (error) {
      console.log("ERROR", error);
      alert("Ошибка при создании карточки");
    }
  };

  return (
    <div>
      <p className={styles.title}>Исправьте карточку</p>

      <form className={styles.form}>
        <div className={styles.buttons}>
          <button
            className={styles.btnCancel}
            type="button"
            onClick={() => dispatch(setActiveEditModal(false))}
          >
            Отмена
          </button>
          <button
            disabled={titleTaskForEditFormInput.length >= 1 ? false : true}
            className={styles.btnCreate}
            type="button"
            onClick={handleSubmit}
          >
            Сохранить
          </button>
        </div>
        <div className={styles.cardName}>
          <p>Заголовок</p>
          <input
            value={titleTaskForEditFormInput}
            onChange={handleInputChange}
            placeholder="Название"
            type="text"
            name="heading"
          />
        </div>
        <div className={styles.cardNote}>
          <p>Заметки</p>
          <textarea
            value={textTaskForEditFormInput}
            onChange={handleTextareaChange}
            placeholder="Заметка"
            name="note"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
