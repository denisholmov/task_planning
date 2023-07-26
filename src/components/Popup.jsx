import React from "react";
import classes from "../scss/CreateTask.module.scss";

const Popup = () => {
  return (
    <div className={classes.taskPopup}>
      <ul>
        <li>Текст</li>
        <li>Список</li>
      </ul>
    </div>
  );
};

export default Popup;
