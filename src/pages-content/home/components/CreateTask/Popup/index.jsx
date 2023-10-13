import React from "react";
import styles from "./styles.module.scss";
import { Modal } from "./components/Modal";
import { Form } from "./components/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  setRememberCategory,
  setActiveModal,
  editSelectorActivaModal,
} from "../../../../../redux/slices/editTaskSlice";
import sectionTasks from "../../../../../assets/sectionTasks.json";

export const PopupAddCard = () => {
  const activeModal = useSelector(editSelectorActivaModal);
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState(4);
  let activeTask = styles.active;

  const handleClick = (category) => {
    dispatch(setActiveModal(!activeModal));
    dispatch(setRememberCategory(category));
  };

  return (
    <div className={styles.taskPopup}>
      <ul>
        {sectionTasks.map((category, i) => (
          <li
            key={category.id}
            onMouseEnter={() => setSelected(i)}
            onMouseLeave={() => setSelected(4)}
            onClick={() => handleClick(category.id)}
            className={selected === i ? `${activeTask}` : ""}
          >
            {category.title}
          </li>
        ))}
      </ul>
      {activeModal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </div>
  );
};
