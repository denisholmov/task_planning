import React from "react";
import classes from "./Main.module.scss";
import Categories from "./Categories/Categories";
import CreateTask from "./CreateTask/CreateTask";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.tasks}>
        <div className={classes.container}>
          <div className={classes.content}>
            <CreateTask />

            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
