import React from "react";
import classes from "./CreateTask.module.scss";
import Popup from "./Popup/Popup";

const CreateTask = () => {
  const [open, setOpen] = React.useState(false); // открыть, закрыть список задач
  const list = ["Не запущен", "В процессе", "Заблокирован", "Сделано"];

  const onClickAddTask = React.useCallback(() => {
    setOpen(!open);
  }, []);

  return (
    <div className={classes.popup}>
      <button onClick={onClickAddTask} className={classes.btn}>
        Добавить карточку
      </button>
      {open && <Popup list={list} setOpen={setOpen} />}
    </div>
  );
};

export default CreateTask;
