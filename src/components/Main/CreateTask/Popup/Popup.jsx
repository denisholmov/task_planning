import React from "react";
import classes from "./Popup.module.scss";
import Modal from "./Modal/Modal";
import Form from "./Form/Form";

const Popup = ({ list, setOpen }) => {
  const [selected, setSelected] = React.useState(2); // состояние для списка задач, наведение на li
  let activeTask = classes.active; // создал эту переменную, чтобы записать в неё css модуль, иначе он не передастся в li

  const [activeModal, setActiveModal] = React.useState(false);

  return (
    <div className={classes.taskPopup}>
      <ul>
        {list.map((item, i) => (
          <li
            key={i}
            onMouseEnter={() => setSelected(i)}
            onClick={() => setActiveModal(true)}
            className={selected === i ? `${activeTask}` : ""}
          >
            {item}
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
