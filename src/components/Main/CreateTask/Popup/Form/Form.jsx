import React from "react";

const Form = () => {
  return (
    <>
      <p>Добавьте карточку</p>
      <form action="#">
        <div>
          <button>Создать</button>
          <button>Отмена</button>
        </div>
        <div>
          <p>Заголовок</p>
          <input
            placeholder="Добавить название"
            type="text"
            name="task"
            value=""
          />
        </div>
        <div>
          <p>Заметки</p>
          <textarea placeholder="Добавить заметку" name="text"></textarea>
        </div>
      </form>
    </>
  );
};

export default Form;
