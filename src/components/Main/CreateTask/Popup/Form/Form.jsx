import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setSearchInputTask,
  setSearchTextareaTask,
} from "../../../../../redux/slices/editTaskSlice";

import classes from "./Form.module.scss";

const Form = ({ activeModal, setActiveModal }) => {
  const categoryId = useSelector((state) => state.edit.categoryId);
  const titleTask = useSelector((state) => state.edit.titleTask);
  const textTask = useSelector((state) => state.edit.textTask);

  const dispatch = useDispatch();

  const newTask = {
    category: categoryId,
    title: titleTask,
    text: textTask,
  }; // Сюда будут создаваться новые задачи и затем передаваться по запросу POST

  const handleInputChange = (event) => {
    dispatch(setSearchInputTask(event.target.value));
  };
  const handleTextareaChange = (event) => {
    dispatch(setSearchTextareaTask(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://64ca5c17700d50e3c704c7f0.mockapi.io/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setActiveModal(false);
      })
      .catch((error) => {
        console.log("Произошла ошибка:", error);
      });
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
