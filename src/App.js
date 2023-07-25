// import classes from "./App.module.scss";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
    </div> // wrapper
  );
};

export default App;
