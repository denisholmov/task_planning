import React from "react";
import classes from "./Popup.module.scss";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import { useSelector, useDispatch } from "react-redux";
import { setRememberCategory } from "../../../../redux/slices/editTaskSlice";
import sectionTasks from "../../../../assets/sectionTasks.json";

const Popup = () => {
  //   const categoryId = useSelector((state) => state.edit.categoryId);
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState(4); // состояние для списка задач, наведение на li
  let activeTask = classes.active; // создал эту переменную, чтобы записать в неё css модуль, иначе он не передастся в li

  const [activeModal, setActiveModal] = React.useState(false);
  //   const [rememberCategory, setRememberCategory] = React.useState(0); // в этот state запоминается категория, по которой сортируются новые созданные карточки

  const handleClick = (category) => {
    setActiveModal(!activeModal);
    //  setRememberCategory(category);
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
        <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
          <Form
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            // rememberCategory={rememberCategory}
          />
        </Modal>
      )}
    </div>
  );
};

export default Popup;
