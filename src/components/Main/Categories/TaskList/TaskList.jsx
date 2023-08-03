import React from "react";
import classes from "../Categories.module.scss";
import Task from "./Task/Task";

const TaskList = ({ titleCategory, colorTitleCategoryBack, category }) => {
  const [entireTaskList, setEntireTaskList] = React.useState([]);

  React.useEffect(() => {
    fetch("https://64ca5c17700d50e3c704c7f0.mockapi.io/task")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setEntireTaskList(json);
      });
  }, []);

  return (
    <div className={classes.taskList}>
      <div
        className={classes.titleTask}
        style={{ backgroundColor: colorTitleCategoryBack }}
      >
        <h2>{titleCategory}</h2>
      </div>
      <ul>
        {entireTaskList.map((taskItem) =>
          category.category === taskItem.category ? (
            <Task key={taskItem.id} taskItem={taskItem} />
          ) : undefined
        )}
        {/* <li className={classes.card}>
          <h3>{task}</h3>
          <p></p>
        </li> */}
      </ul>
    </div>
  );
};

export default TaskList;
