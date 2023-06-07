import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },

    updateCheckBox: (state, action) => {
      const { id } = action.payload;
      state.todos.map((item) => {
        if (id === item.id) {
          if (item.status === "Active") {
            item.status = "Completed";
          } else {
            item.status = "Active";
          }
        }
        return item.status;
      });
    },

    updateTodo: (state, action) => {
      const { id, title, desc } = action.payload;
      state.todos.map((item) => {
        if (id === item.id) {
          if (title) {
            item.title = title;
          }
          if (desc) {
            item.desc = desc;
          }
        }
        return item.title && item.desc;
      });
    },

    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((item) => {
        return item.id !== id;
      });
    },

    removeAllTodo: (state) => {
      state.todos = [];
    },
  },
});

export const {
  addTodo,
  updateCheckBox,
  updateTodo,
  deleteTodo,
  removeAllTodo,
} = todoSlice.actions;

export const selectTodo = (state) => state.todos.todos;

export default todoSlice.reducer;
