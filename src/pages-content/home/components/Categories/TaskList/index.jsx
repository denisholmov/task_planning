import React from "react";
import { Task } from "./Task/";
import { useSelector, useDispatch } from "react-redux";
import { setSuccessfulRequestMethodDelete } from "../../../../../redux/slices/editTaskSlice";

import {
  editSelector,
  fetchTasks,
} from "../../../../../redux/slices/editTaskSlice";

import styles from "../styles.module.scss";

export const TaskList = ({
  titleCategory,
  colorTitleCategoryBack,
  category,
}) => {
  const { entireTaskList, successfulRequestMethodDelete } =
    useSelector(editSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    try {
      dispatch(fetchTasks());
      if (successfulRequestMethodDelete) {
        dispatch(setSuccessfulRequestMethodDelete(false));
      }
    } catch (error) {
      console.log("ERROR", error);
      alert("Ошибка при получении задач");
    }
  }, [successfulRequestMethodDelete]);

  return (
    <div className={styles.taskList}>
      <div
        className={styles.titleTask}
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
