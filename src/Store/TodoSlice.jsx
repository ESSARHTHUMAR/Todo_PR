import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
  return [];
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
  // [
  //   {
  //     id: "1",
  //     text: "Create React App",
  //     status: "Pending",
  //     createdAt: new Date().toISOString(),
  //   },
  // ]
  selectedDate: null,
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        status: "Pending",
        createdAt: action.payload.createdAt,
      };
      //Push todo to the Todo Array
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = newStatus;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { addTodo, setSelectedDate, updateStatus, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
