import React from "react";
import classes from "./Popup.module.scss";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import sectionTasks from "../../../../assets/sectionTasks.json";

const Popup = () => {
  const [selected, setSelected] = React.useState(4); // состояние для списка задач, наведение на li
  let activeTask = classes.active; // создал эту переменную, чтобы записать в неё css модуль, иначе он не передастся в li

  const [activeModal, setActiveModal] = React.useState(false);

  return (
    <div className={classes.taskPopup}>
      <ul>
        {sectionTasks.map((category, i) => (
          <li
            key={category.id}
            onMouseEnter={() => setSelected(i)}
            onMouseLeave={() => setSelected(4)}
            onClick={() => setActiveModal(true)}
            className={selected === i ? `${activeTask}` : ""}
          >
            {category.title}
          </li>
        ))}
      </ul>
      {activeModal && (
        <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
          <Form />
        </Modal>
      )}
    </div>
  );
};

export default Popup;
