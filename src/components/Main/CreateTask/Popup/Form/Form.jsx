import React from "react";

import classes from "./Form.module.scss";

const Form = ({ activeModal, setActiveModal, rememberCategory }) => {
  const [searchInputTask, setSearchInputTask] = React.useState("");
  const [searchTextareaTask, setSearchTextareaTask] = React.useState("");


  //   const [listCards, setListCards] = React.useState(); //Здесь хранятся созданные карточки --------

  //   const [cardData, setCardData] = React.useState([]);
  //   const [buttonActive, setButtonActive] = React.useState(false);

  const newTask = {
    category: rememberCategory,
    title: searchInputTask,
    text: searchTextareaTask,
  }; // Сюда будут создаваться новые задачи и затем передаваться по запросу POST

  //   const handleInputChange = (event) => {
  //     console.log(event.target);
  //     setFormData({ ...formData, [event.target.name]: event.target.value });
  //   };

  const handleInputChange = (event) => {
    setSearchInputTask(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setSearchTextareaTask(event.target.value);
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
  };

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
            disabled={searchInputTask.length >= 1 ? false : true} // делаем кнопку активной либо неактивной
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
            value={searchInputTask}
            onChange={handleInputChange}
            placeholder="Добавить название"
            type="text"
            name="heading"
          />
        </div>
        <div className={classes.cardNote}>
          <p>Заметки</p>
          <textarea
            value={searchTextareaTask}
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
