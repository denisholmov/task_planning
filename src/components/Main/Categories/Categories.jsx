import React from "react";
import classes from "./Categories.module.scss";
import TaskList from "./TaskList/TaskList";

const Categories = () => {
  console.log("Перерисовка categories");
  const [taskCategories, setTaskCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("https://64ca5c17700d50e3c704c7f0.mockapi.io/itemsTask")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setTaskCategories(json);
      });
  }, []);

  return (
    <div className={classes.categories}>
      {taskCategories.map((category) => (
        <TaskList
          key={category.id}
          titleCategory={category.title}
          colorTitleCategoryBack={category.color}
          category={category}
        /> // Сюда подгрузил 4 столбца с задачами
      ))}
    </div>
  );
};

export default Categories;
