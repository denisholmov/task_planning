import React from "react";
import classes from "../scss/Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 className={classes.title}>Личный</h1>
        <div className={classes.text}>Доска для отслеживания личных задач.</div>
      </div>
    </header>
  );
};

export default Header;
