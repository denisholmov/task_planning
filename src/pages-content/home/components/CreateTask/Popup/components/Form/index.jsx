import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editSelector,
  fetchCreateTasks,
} from "../../../../../../../redux/slices/editTaskSlice";

import {
  setSearchInputTask,
  setSearchTextareaTask,
  setActiveModal,
} from "../../../../../../../redux/slices/editTaskSlice";

import styles from "./styles.module.scss";

export const Form = () => {
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
        fetchCreateTasks({
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
      <p className={styles.title}>Добавьте карточку</p>

      <form className={styles.form}>
        <div className={styles.buttons}>
          <button
            className={styles.btnCancel}
            type="button"
            onClick={() => dispatch(setActiveModal(false))}
          >
            Отмена
          </button>
          <button
            disabled={titleTask.length >= 1 ? false : true}
            className={styles.btnCreate}
            type="button"
            onClick={handleSubmit}
          >
            Создать
          </button>
        </div>
        <div className={styles.cardName}>
          <p>Заголовок</p>
          <input
            value={titleTask}
            onChange={handleInputChange}
            placeholder="Добавить название"
            type="text"
            name="heading"
          />
        </div>
        <div className={styles.cardNote}>
          <p>Заметки</p>
          <textarea
            value={textTask}
            onChange={handleTextareaChange}
            placeholder="Добавить заметку"
            name="note"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
