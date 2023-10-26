import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  editSelector,
  fetchEditTask,
} from "../../../../../../../../../redux/slices/editTaskSlice";

import {
  setSearchInputTask,
  setSearchTextareaTask,
  setActiveEditModal,
} from "../../../../../../../../../redux/slices/editTaskSlice";

import styles from "./styles.module.scss";

export const FormEdit = () => {
  const { categoryId, titleTask, textTask } = useSelector(editSelector);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSearchInputTask(event.target.value));
  };

  const handleTextareaChange = (event) => {
    dispatch(setSearchTextareaTask(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      dispatch(
        fetchEditTask({
          categoryId,
          titleTask,
          textTask,
        })
      );
    } catch (error) {
      console.log("ERROR", error);
      alert("Ошибка при создании карточки");
    }
  }; // создаёт карточку

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
            disabled={titleTask.length >= 1 ? false : true}
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
            value={titleTask}
            onChange={handleInputChange}
            placeholder="Название"
            type="text"
            name="heading"
          />
        </div>
        <div className={styles.cardNote}>
          <p>Заметки</p>
          <textarea
            value={textTask}
            onChange={handleTextareaChange}
            placeholder="Заметка"
            name="note"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
