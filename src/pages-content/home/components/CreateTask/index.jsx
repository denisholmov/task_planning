import React from "react";
import styles from "./styles.module.scss";
import { Popup } from "./Popup";

export const CreateTask = () => {
  const [open, setOpen] = React.useState(false); // открыть, закрыть список задач

  const onClickAddTask = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.popup}>
      <button onClick={onClickAddTask} className={styles.btn}>
        Добавить карточку
      </button>
      {open && <Popup />}
    </div>
  );
};
