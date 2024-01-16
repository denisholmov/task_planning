import React from "react";
import { MenuModal } from "./MenuModal/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles.module.scss";

import {
  editSelector,
  setMenuActive,
  setMenuActiveId,
  setCurrentDrugNDropCategoryItem,
  setCurrentDrugNDropIdItem,
} from "../../../../../../redux/slices/editTaskSlice";

export const Task = ({ taskItem, category }) => {
  const { menuActive, menuActiveId, currentDrugNDropCategoryItem } =
    useSelector(editSelector);
  const dispatch = useDispatch();

  const handleMenuClick = (id) => {
    dispatch(setMenuActive(!menuActive));
    dispatch(setMenuActiveId(id));
  };

  let taskItemId = taskItem.id;

  function dragStartHandler(e, category, taskItemId) {
    dispatch(setCurrentDrugNDropCategoryItem(category));
    dispatch(setCurrentDrugNDropIdItem(taskItemId));
  } // Здесь будем вызывать состояния которые запоминаются в редаксе, это состояние текущей карточки(id и category)

  return (
    <li
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, category, taskItemId)}
      key={taskItem.id}
      className={styles.card}
    >
      <div className={styles.content}>
        <h3>{taskItem.title}</h3>
        <p>{taskItem.text}</p>
      </div>
      <svg
        onClick={() => handleMenuClick(taskItemId)}
        className={styles.menu}
        width={30}
        height={30}
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M140,192a12,12,0,1,1-12-12A12.01375,12.01375,0,0,1,140,192ZM128,76a12,12,0,1,0-12-12A12.01375,12.01375,0,0,0,128,76Zm0,40a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,116Z" />
      </svg>
      {menuActive && taskItemId === menuActiveId && (
        <MenuModal taskItemId={taskItemId}></MenuModal>
      )}
    </li>
  );
};
