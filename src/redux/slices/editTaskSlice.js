import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  titleTask: "", // searchInputTask
  textTask: "", // searchTextareaTask
};

export const editTaskSlice = createSlice({
  name: "editTask",
  initialState: initialState,
  reducers: {
    setRememberCategory: (state, action) => {
      state.categoryId = action.payload;
    }, // Сюда получаем категорию

    setSearchInputTask: (state, action) => {
      state.titleTask = action.payload;
    }, // Сюда передаём title, который должны передавать из input

    setSearchTextareaTask: (state, action) => {
      state.textTask = action.payload;
    }, // Сюда передаём text, который должны передавать из textarea

    handleCreateTask: (state, action) => {}, //handle submit
  },
});

export const {
  setRememberCategory,
  setSearchInputTask,
  setSearchTextareaTask,
} = editTaskSlice.actions;

export default editTaskSlice.reducer;
