// import classes from "./App.module.scss";
import classes from "./App.module.scss";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
