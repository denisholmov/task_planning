import React from "react";
import classes from "../scss/Main.module.scss";
import Categories from "./Categories";
import CreateTask from "./CreateTask";

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
