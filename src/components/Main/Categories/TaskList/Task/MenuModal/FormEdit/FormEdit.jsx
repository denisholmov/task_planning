import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editSelector } from "../../../../../../../redux/slices/editTaskSlice";

import {
  setSearchInputTask,
  setSearchTextareaTask,
  setActiveEditModal,
} from "../../../../../../../redux/slices/editTaskSlice";

import classes from "./FormEdit.module.scss";

const FormEdit = () => {
  //   const [task, setTask] = React.useState({});
  //   const [title, setTitle] = React.useState("");
  //   const [description, setDescription] = React.useState("");
  const { categoryId, titleTask, textTask } = useSelector(editSelector);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSearchInputTask(event.target.value));
  };
  const handleTextareaChange = (event) => {
    dispatch(setSearchTextareaTask(event.target.value));
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     try {
  //       dispatch();
  //     } catch (error) {
  //       console.log("ERROR", error);
  //       alert("Ошибка при редактировании карточки");
  //     }
  //   }; // создаёт карточку

  React.useEffect(
    fetch(`https://64ca5c17700d50e3c704c7f0.mockapi.io/task/${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchInputTask(data.title);
        setSearchTextareaTask(data.text);
      })
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://64ca5c17700d50e3c704c7f0.mockapi.io/task/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titleTask, textTask }),
    });
  };

  return (
    <div>
      <p className={classes.title}>Отредактируйте карточку</p>

      <form className={classes.form}>
        <div className={classes.buttons}>
          <button
            className={classes.btnCancel}
            type="button"
            onClick={() => setActiveEditModal(false)}
          >
            Отмена
          </button>
          <button
            className={classes.btnCreate}
            type="button"
            onClick={handleSubmit}
          >
            Сохранить
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

export default FormEdit;
