import React from "react";
import styles from "./styles.module.scss";
import { TaskList } from "./TaskList";

export const Categories = () => {
  const [taskCategories, setTaskCategories] = React.useState([]);

  React.useEffect(() => {
    if (taskCategories.length === 0) {
      fetch("https://64ca5c17700d50e3c704c7f0.mockapi.io/itemsTask")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setTaskCategories(json);
        });
    }
  }, []);

  return (
    <div className={styles.categories}>
      {taskCategories.map((taskCategory) => (
        <TaskList
          titleCategory={taskCategory.title}
          colorTitleCategoryBack={taskCategory.color}
          taskCategory={taskCategory}
          key={taskCategory.id}
        />
      ))}
    </div>
  );
};
