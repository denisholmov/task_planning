import React from "react";
import classes from "../scss/Main.module.scss";
import Categories from "./Categories";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.tasks}>
        <div className={classes.container}>
          <div className={classes.content}>
            <button className={classes.btn}>Добавить карточку</button>

            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
