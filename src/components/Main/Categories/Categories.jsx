import React from "react";
import classes from "./Categories.module.scss";
import TaskList from "./TaskList/TaskList";

const Categories = () => {
  const [taskApplication, setTaskApplication] = React.useState([]);

  React.useEffect(() => {
    fetch("https://64ca5c17700d50e3c704c7f0.mockapi.io/itemsTask")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setTaskApplication(json);
        console.log(taskApplication);
      });
  }, []);

  return (
    <div className={classes.categories}>
      {taskApplication.map((item) => (
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
