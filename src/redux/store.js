import { configureStore } from "@reduxjs/toolkit";
import editTaskSlice from "./slices/editTaskSlice";

export const store = configureStore({
  reducer: { edit: editTaskSlice },
});
