import React from "react";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.tasks}>
        <div className={classes.container}>
          <div className={classes.content}>
            <button className={classes.btn}>Добавить карточку</button>

            {/* tasksItem ------- */}
            <div className={classes.tasksItem}>
              <div className={classes.item}>
                <div className={classes.titleTask}>
                  <h2>Не запущен</h2>
                </div>
                <ul>
                  <li className={classes.card}>
                    <h3>Отведите коко к ветеринару</h3>
                    <p></p>
                  </li>
                </ul>
              </div>
              <div className={classes.item}>
                <div className={classes.titleTask}>
                  <h2>В процессе</h2>
                </div>
                <ul>
                  <li className={classes.card}>
                    <h3>Налоги</h3>
                    <p></p>
                  </li>
                </ul>
              </div>
              <div className={classes.item}>
                <div className={classes.titleTask}>
                  <h2>Заблокированный</h2>
                </div>
                <ul>
                  <li className={classes.card}>
                    <h3>Переезд</h3>
                    <p></p>
                  </li>
                </ul>
              </div>
              <div className={classes.item}>
                <div className={classes.titleTask}>
                  <h2>Сделано</h2>
                </div>
                <ul>
                  <li className={classes.card}>
                    <h3>Отксерокопить документы</h3>
                    <p></p>
                  </li>
                </ul>
              </div>
            </div>
            {/* /tasksItem ---------------- */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
