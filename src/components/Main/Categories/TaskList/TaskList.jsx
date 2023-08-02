import React from "react";
import classes from "../Categories.module.scss";

const TaskList = ({ titleTask, colorTitleTaskBack, sectionTask }) => {
  return (
    <div className={classes.taskList}>
      <div
        className={classes.titleTask}
        style={{ backgroundColor: colorTitleTaskBack }}
      >
        <h2>{titleTask}</h2>
      </div>
      <ul>
        {sectionTask.task.map((value) => (
          <li key={value.id} className={classes.card}>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </li>
        ))}
        {/* <li className={classes.card}>
          <h3>{task}</h3>
          <p></p>
        </li> */}
      </ul>
    </div>
  );
};

export default TaskList;
