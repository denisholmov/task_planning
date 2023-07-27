// import classes from "./App.module.scss";
import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
