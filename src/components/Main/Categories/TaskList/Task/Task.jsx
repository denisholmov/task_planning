import React from "react";
import classes from "../../Categories.module.scss";

const Task = ({ item }) => {
  return (
    <li key={item.id} className={classes.card}>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </li>
  );
};

export default Task;
