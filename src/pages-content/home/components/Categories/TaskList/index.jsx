import React from "react";
import { Task } from "./Task/";
import { useSelector, useDispatch } from "react-redux";
import {
  setSuccessfulRequestMethodDelete,
  setCurrentDrugNDropCategoryBoard,
  setEntireTaskList,
} from "../../../../../redux/slices/editTaskSlice";

import {
  editSelector,
  fetchTasks,
  fetchEditCategoryDragNDrop,
} from "../../../../../redux/slices/editTaskSlice";

import styles from "../styles.module.scss";

export const TaskList = ({
  titleCategory,
  colorTitleCategoryBack,
  taskCategory,
}) => {
  const {
    entireTaskList,
    successfulRequestMethodDelete,
    currentDrugNDropCategoryBoard,

    currentDrugNDropIdItem,
  } = useSelector(editSelector);
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

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e, category) {
    e.preventDefault();

    dispatch(setCurrentDrugNDropCategoryBoard(category));
  }

  React.useEffect(() => {
    dispatch(
      fetchEditCategoryDragNDrop({
        currentDrugNDropIdItem,
        currentDrugNDropCategoryBoard,
      })
    );
  }, [currentDrugNDropCategoryBoard]);

  return (
    <div
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, taskCategory.category)}
      className={styles.taskList}
    >
      <div
        className={styles.titleTask}
        style={{ backgroundColor: colorTitleCategoryBack }}
      >
        <h2>{titleCategory}</h2>
      </div>
      <ul>
        {entireTaskList.map((taskItem) =>
          taskCategory.category === taskItem.category ? (
            <Task
              taskItem={taskItem}
              category={taskCategory.category}
              key={taskItem.id}
            />
          ) : undefined
        )}
      </ul>
    </div>
  );
};
