import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World", isEditVisible: true }],
  //edit: { isEditVisible: true, id: 0, text: "" },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditVisible: true,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((e) => e.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos.map((e) =>
        e.id === action.payload.id
          ? (e.text = action.payload.text) || (state.todos.isEditVisible = true)
          : null
      );
    },

    setEditVisibleFlag: (state, action) => {
      if (action.payload.btn === "edit") {
        const updatedTodos = state.todos.map((e) =>
          e.id === action.payload.id
            ? { ...e, isEditVisible: false }
            : { ...e, isEditVisible: true }
        );
        state.todos = updatedTodos;
      } else if (action.payload.btn === "cancel") {
        const updatedTodos = state.todos.map((e) =>
          e.id === action.payload.id ? { ...e, isEditVisible: true } : { ...e }
        );
        state.todos = updatedTodos;
      } else {
        const updatedTodos = state.todos.map((e) =>
          e.id === action.payload.id ? { ...e, isEditVisible: true } : { ...e }
        );
        state.todos = updatedTodos;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  setEditVisibleFlag,
  // CancelEditButtonHandler,
} = todoSlice.actions;

export default todoSlice.reducer;
