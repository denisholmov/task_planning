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

export const fetchEditTask = createAsyncThunk(
  "editTask/fetchEditTaskStatus",
  async ({
    taskItemId,
    categoryIdForEditFormTask,
    titleTaskForEditFormInput,
    textTaskForEditFormInput,
  }) => {
    const response = await fetch(
      `https://64ca5c17700d50e3c704c7f0.mockapi.io/task/${taskItemId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: categoryIdForEditFormTask,
          title: titleTaskForEditFormInput,
          text: textTaskForEditFormInput,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data; // fetch запрос на редактирование карточек
  }
);

export const fetchEditCategoryDragNDrop = createAsyncThunk(
  "editTask/fetchEditDragNDroptatus",
  async ({ currentDrugNDropIdItem, currentDrugNDropCategoryBoard }) => {
    const response = await fetch(
      `https://64ca5c17700d50e3c704c7f0.mockapi.io/task/${currentDrugNDropIdItem}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: currentDrugNDropCategoryBoard,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data; // fetch запрос на редактирование категории карточек во время drag-n-drop
  }
);

const initialState = {
  categoryId: 0,
  titleTask: "", // searchInputTask
  textTask: "", // searchTextareaTask
  entireTaskList: [],
  activeModal: false,
  activeEditModal: false,
  newTask: "",
  menuActive: false,
  menuActiveId: null,
  categoryIdForEditFormTask: 0,
  titleTaskForEditFormInput: "",
  textTaskForEditFormInput: "",
  successfulRequestMethodDelete: false,
  currentDrugNDropCategoryItem: 0,
  currentDrugNDropIdItem: 0,
  currentDrugNDropCategoryBoard: 0,
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

    setActiveEditModal: (state, action) => {
      state.activeEditModal = action.payload;
    }, // открытие, закрытие редактирующего модального окна

    setMenuActive: (state, action) => {
      state.menuActive = action.payload; // этот action включает или выключает меню карточки.
    },
    setMenuActiveId: (state, action) => {
      state.menuActiveId = action.payload;
    },
    setTitleTaskForEditFormInput: (state, action) => {
      state.titleTaskForEditFormInput = action.payload;
    },
    setTextTaskForEditFormInput: (state, action) => {
      state.textTaskForEditFormInput = action.payload;
    },
    setCategoryIdForEditFormTask: (state, action) => {
      state.categoryIdForEditFormTask = action.payload;
    },
    setSuccessfulRequestMethodDelete: (state, action) => {
      state.successfulRequestMethodDelete = action.payload;
    },
    setCurrentDrugNDropCategoryItem: (state, action) => {
      state.currentDrugNDropCategoryItem = action.payload;
    },
    setCurrentDrugNDropIdItem: (state, action) => {
      state.currentDrugNDropIdItem = action.payload;
    },
    setCurrentDrugNDropCategoryBoard: (state, action) => {
      state.currentDrugNDropCategoryBoard = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.entireTaskList = action.payload; // фукнция работает с асинхронным экшеном, который получает карточки
      })
      .addCase(fetchCreateTasks.fulfilled, (state, action) => {
        state.newTask = action.payload;
        state.entireTaskList = state.entireTaskList.concat(action.payload);
        state.activeModal = false;
      })
      .addCase(fetchDeleteTask.fulfilled, (state, action) => {
        state.menuActive = false;
        state.successfulRequestMethodDelete = true;
      })
      .addCase(fetchEditTask.fulfilled, (state, action) => {
        state.menuActive = false;
        state.entireTaskList = state.entireTaskList.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(fetchEditCategoryDragNDrop.fulfilled, (state, action) => {
        state.entireTaskList = state.entireTaskList.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
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
  setActiveEditModal,
  setTitleTaskForEditFormInput,
  setTextTaskForEditFormInput,
  setCategoryIdForEditFormTask,
  setSuccessfulRequestMethodDelete,
  setCurrentDrugNDropCategoryItem,
  setCurrentDrugNDropIdItem,
  setCurrentDrugNDropCategoryBoard,
} = editTaskSlice.actions;

export default editTaskSlice.reducer;
