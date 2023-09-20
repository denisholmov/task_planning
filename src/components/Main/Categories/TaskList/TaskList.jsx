import React from "react";
import Task from "./Task/Task";
import { useSelector, useDispatch } from "react-redux";

import {
  setEntireTaskList,
  fetchTasks,
} from "../../../../redux/slices/editTaskSlice";

import classes from "../Categories.module.scss";

const TaskList = ({ titleCategory, colorTitleCategoryBack, category }) => {
  //   const [entireTaskList, setEntireTaskList] = React.useState([]); // состояние которое хранит инфу о бо всех карточках

  const { entireTaskList } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchTasks());
    } catch (error) {
      console.log("ERROR", error);
      alert("Ошибка при получении задач");
    }
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
      </ul>
    </div>
  );
};

export default TaskList;
