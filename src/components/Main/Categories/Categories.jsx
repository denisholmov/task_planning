import React from "react";
import classes from "./Categories.module.scss";
import TaskList from "./TaskList/TaskList";
import sectionTasks from "../../../assets/sectionTasks.json";

const Categories = () => {
  // https://64ca5c17700d50e3c704c7f0.mockapi.io/itemsTask - ссылка на mockApi

  //   fetch("https://64ca5c17700d50e3c704c7f0.mockapi.io/itemsTask");

  return (
    <div className={classes.categories}>
      {sectionTasks.map((item) => (
        <TaskList
          key={item.id}
          titleTask={item.title}
          colorTitleTaskBack={item.color}
          sectionTask={item}
        /> // Сюда подгрузил 4 столбца с задачами
      ))}
    </div>
  );
};

export default Categories;
