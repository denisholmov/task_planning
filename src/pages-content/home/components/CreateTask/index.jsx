import React from "react";
import styles from "./styles.module.scss";
import { PopupAddCard } from "./Popup";

export const CreateTask = () => {
  const [isPACRender, setIsPACRender] = React.useState(false);

  const buttonAddCardText = isPACRender ? "Скрыть" : "Добавить";

  const buttonAddCardClickHandler = () => {
    setIsPACRender((prev) => !prev);
  };

  return (
    <div className={styles.popup}>
      <button onClick={buttonAddCardClickHandler} className={styles.btn}>
        {buttonAddCardText} карточку
      </button>
      {isPACRender && <PopupAddCard />}
    </div>
  );
};
