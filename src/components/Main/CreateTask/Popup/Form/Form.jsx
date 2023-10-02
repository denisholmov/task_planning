import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editSelector,
  fetchCreateTasks,
} from "../../../../../redux/slices/editTaskSlice";

import {
  setSearchInputTask,
  setSearchTextareaTask,
  setActiveModal,
} from "../../../../../redux/slices/editTaskSlice";

import classes from "./Form.module.scss";

const Form = () => {
  const { categoryId, titleTask, textTask } = useSelector(editSelector);

  const dispatch = useDispatch();

  //   const newTask = {
  //     category: categoryId,
  //     title: titleTask,
  //     text: textTask,
  //   }; // Сюда создаются новые задачи и затем передаются по запросу POST

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
      <p className={classes.title}>Добавьте карточку</p>

      <form className={classes.form}>
        <div className={classes.buttons}>
          <button
            className={classes.btnCancel}
            type="button"
            onClick={() => setActiveModal(false)}
          >
            Отмена
          </button>
          <button
            disabled={titleTask.length >= 1 ? false : true} // делаем кнопку активной либо неактивной
            className={classes.btnCreate}
            type="button"
            onClick={handleSubmit}
          >
            Создать
          </button>
        </div>
        <div className={classes.cardName}>
          <p>Заголовок</p>
          <input
            value={titleTask}
            onChange={handleInputChange}
            placeholder="Добавить название"
            type="text"
            name="heading"
          />
        </div>
        <div className={classes.cardNote}>
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

export default Form;
