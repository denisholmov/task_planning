import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "editTask/fetchTasksStatus",
  async () => {
    const response = await fetch(
      "https://64ca5c17700d50e3c704c7f0.mockapi.io/task"
    );
    const data = await response.json();
    return data; // fetch запрос на отображение карточек
  }
);

export const fetchCreateTasks = createAsyncThunk(
  "editTask/fetchCreateTasksStatus",
  async ({ categoryId, titleTask, textTask }) => {
    const response = await fetch(
      "https://64ca5c17700d50e3c704c7f0.mockapi.io/task",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: categoryId,
          title: titleTask,
          text: textTask,
        }),
      }
    );
    const data = await response.json();
    return data; // fetch запрос на создание карточек
  }
);

export const fetchDeleteTask = createAsyncThunk(
  "editTask/fetchDeleteTaskStatus",
  async ({ taskItemId }) => {
    const response = await fetch(
      `https://64ca5c17700d50e3c704c7f0.mockapi.io/task/${taskItemId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data; // fetch запрос на удаление карточек
  }
);

const initialState = {
  categoryId: 0,
  titleTask: "", // searchInputTask
  textTask: "", // searchTextareaTask
  entireTaskList: [],
  activeModal: false,
  newTask: "",
  menuActive: false,
  menuActiveId: null,
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

    setActiveModal: (state, action) => {
      state.activeModal = action.payload; // этот action активизирует или деактивизирует модальное окно для создания задачек
    },

    setMenuActive: (state, action) => {
      state.menuActive = action.payload; // этот action включает или выключает меню карточки.
    },
    setMenuActiveId: (state, action) => {
      state.menuActiveId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.entireTaskList = action.payload; // фукнция работает с асинхронным экшеном, который получает карточки
      })
      .addCase(fetchCreateTasks.fulfilled, (state, action) => {
        state.newTask = action.payload;
        state.activeModal = false;
      })
      .addCase(fetchDeleteTask.fulfilled, (state, action) => {
        state.menuActive = false;
      });
  },
});

export const editSelector = (state) => state.edit;
export const editSelectorActivaModal = (state) => state.edit.activeModal;

export const {
  setRememberCategory,
  setSearchInputTask,
  setSearchTextareaTask,
  setEntireTaskList,
  setActiveModal,
  setMenuActive,
  setMenuActiveId,
} = editTaskSlice.actions;

export default editTaskSlice.reducer;
