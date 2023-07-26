import React from "react";
import classes from "../scss/CreateTask.module.scss";
import Popup from "./Popup";

const CreateTask = () => {
  const [open, setOpen] = React.useState(false);

  const onClickAddTask = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.popup}>
      <button onClick={onClickAddTask} className={classes.btn}>
        Добавить карточку
      </button>
      {open && <Popup />}
    </div>
  );
};

export default CreateTask;
