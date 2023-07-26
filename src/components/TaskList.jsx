import React from "react";
import classes from "../scss/Categories.module.scss";

const TaskList = ({ titleTask, titleCard, colorTitleTaskBack }) => {
  return (
    <div className={classes.taskList}>
      <div
        className={classes.titleTask}
        style={{ backgroundColor: colorTitleTaskBack }}
      >
        <h2>{titleTask}</h2>
      </div>
      <ul>
        <li className={classes.card}>
          <h3>{titleCard}</h3>
          <p></p>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
