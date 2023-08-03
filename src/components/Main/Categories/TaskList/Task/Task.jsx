import React from "react";
import classes from "../../Categories.module.scss";

const Task = ({ taskItem }) => {
  return (
    <li key={taskItem.id} className={classes.card}>
      <h3>{taskItem.title}</h3>
      <p>{taskItem.text}</p>
    </li>
  );
};

export default Task;
