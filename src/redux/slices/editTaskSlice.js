import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "editTask/fetchTasksStatus",
  async () => {
    const response = await fetch(
      "https://64ca5c17700d50e3c704c7f0.mockapi.io/task"
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  categoryId: 0,
  titleTask: "", // searchInputTask
  textTask: "", // searchTextareaTask
  entireTaskList: [],
};

export const editTaskSlice = createSlice({
  name: "editTask",
  initialState: initialState,
  reducers: {
    setEntireTaskList: (state, action) => {
      state.entireTaskList = action.payload; // сюда сохраняем весь список задач
    },

    setRememberCategory: (state, action) => {
      state.categoryId = action.payload;
    }, // Сюда получаем категорию

    setSearchInputTask: (state, action) => {
      state.titleTask = action.payload;
    }, // Сюда передаём title, который должны передавать из input

    setSearchTextareaTask: (state, action) => {
      state.textTask = action.payload;
    }, // Сюда передаём text, который должны передавать из textarea
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.entireTaskList = action.payload;
    });
  },
});

export const {
  setRememberCategory,
  setSearchInputTask,
  setSearchTextareaTask,
  setEntireTaskList,
} = editTaskSlice.actions;

export default editTaskSlice.reducer;
