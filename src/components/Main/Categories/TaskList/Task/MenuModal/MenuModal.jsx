import React from "react";
import classes from "./MenuModal.module.scss";

const MenuModal = ({ taskItemId }) => {
  //   const [deleteTask, setDeleteTask] = React.useState(false);

  const deleteTaskBackend = (id) => {
    fetch(`https://64ca5c17700d50e3c704c7f0.mockapi.io/task/${taskItemId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Успешно удалено");
        } else {
          console.log("Произошла ошибка при удалении");
        }
      })
      .catch((error) => {
        console.log("Произошла ошибка:", error);
      });
  };

  return (
    <div className={classes.popup}>
      <p>Изменить</p>
      <p onClick={() => deleteTaskBackend(taskItemId)}>Удалить</p>
    </div>
  );
};

export default MenuModal;
