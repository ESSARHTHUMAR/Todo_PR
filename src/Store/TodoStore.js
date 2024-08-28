import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";

const TodoStore = configureStore({
  reducer: { todo: TodoReducer },
});

export default TodoStore;
