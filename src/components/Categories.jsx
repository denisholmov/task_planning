import React from "react";
import classes from "../scss/Categories.module.scss";
import TaskList from "./TaskList";

const Categories = () => {
  return (
    <div className={classes.categories}>
      <TaskList
        titleTask="Не запущен"
        titleCard="Отведите коко к ветеринару"
        colorTitleTaskBack="#E1E4E8"
      />
      <TaskList
        titleTask="В процессе"
        titleCard="Налоги"
        colorTitleTaskBack="#F0E7F6"
      />
      <TaskList
        titleTask="Заблокированный"
        titleCard="Переезд"
        colorTitleTaskBack="#FFDCE0"
      />
      <TaskList
        titleTask="Сделано"
        titleCard="Отксерокопить документы"
        colorTitleTaskBack="#CBDFD8"
      />
    </div>
  );
};

export default Categories;
