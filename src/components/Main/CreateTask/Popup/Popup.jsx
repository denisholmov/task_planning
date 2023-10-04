import React from "react";
import classes from "./Popup.module.scss";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  setRememberCategory,
  setActiveModal,
  editSelectorActivaModal,
} from "../../../../redux/slices/editTaskSlice";
import sectionTasks from "../../../../assets/sectionTasks.json";

const Popup = () => {
  const activeModal = useSelector(editSelectorActivaModal);
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState(4); // состояние для списка задач, наведение на li
  let activeTask = classes.active; // создал эту переменную, чтобы записать в неё css модуль, иначе он не передастся в li

  const handleClick = (category) => {
    dispatch(setActiveModal(!activeModal)); // активирование/деактивирование модального окна
    dispatch(setRememberCategory(category)); //передал категорию в диспатч
  };

  return (
    <div className={classes.taskPopup}>
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

export default Popup;
