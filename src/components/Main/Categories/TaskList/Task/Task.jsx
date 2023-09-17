import React from "react";
import MenuModal from "./MenuModal/MenuModal";
import classes from "../../Categories.module.scss";

const Task = ({ taskItem }) => {
  const [menuActive, setMenuActive] = React.useState(false);

  let taskItemId = taskItem.id;
  return (
    <li key={taskItem.id} className={classes.card}>
      <div className={classes.content}>
        <h3>{taskItem.title}</h3>
        <p>{taskItem.text}</p>
      </div>
      <svg
        onClick={() => setMenuActive(!menuActive)}
        className={classes.menu}
        width={30}
        height={30}
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M140,192a12,12,0,1,1-12-12A12.01375,12.01375,0,0,1,140,192ZM128,76a12,12,0,1,0-12-12A12.01375,12.01375,0,0,0,128,76Zm0,40a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,116Z" />
      </svg>
      {menuActive && <MenuModal taskItemId={taskItemId}></MenuModal>}
    </li>
  );
};

export default Task;
