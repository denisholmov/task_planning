// import classes from "./App.module.scss";
import React from "react";
import { CreateTask } from "./components/CreateTask";
import { Categories } from "./components/Categories";
import styles from "./styles.module.scss";

export const HomePageContent = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Личный</h1>
          <div className={styles.text}>
            Доска для отслеживания личных задач.
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.tasks}>
          <div className={styles.container}>
            <div className={styles.content}>
              <CreateTask />

              <Categories />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
