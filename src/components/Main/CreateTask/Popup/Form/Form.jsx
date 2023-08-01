import React from "react";
import classes from "./Form.module.scss";

const Form = () => {
  return (
    <div>
      <p className={classes.title}>Добавьте карточку</p>
      <form className={classes.form} action="#">
        <div className={classes.buttons}>
          <button className={classes.btnCancel}>Отмена</button>
          <button className={classes.btnCreate}>Создать</button>
        </div>
        <div className={classes.cardName}>
          <p>Заголовок</p>
          <input
            placeholder="Добавить название"
            type="text"
            name="task"
            value=""
          />
        </div>
        <div className={classes.cardNote}>
          <p>Заметки</p>
          <textarea placeholder="Добавить заметку" name="text"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
