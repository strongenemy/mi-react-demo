import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoItem {
  id: number;
  content: string;
  state: 'active' | 'done' | 'close';
}

interface TodoState {
  todoList: TodoItem[];
}

const initialState: TodoState = {
  todoList: [{ id: 0, content: "Sample Todo", state: "active" }]
  // {type:add}
};

export const counterSlice = createSlice({
  name: 'addTodo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newId = state.todoList.length;
      const newTodo: TodoItem = {
        id: newId,
        content: action.payload,
        state: "active"
      };
      state.todoList.push(newTodo);


    },
    setState: (state, action: PayloadAction<{ id: number, newState: 'active' | 'done' | 'close' }>) => {
      const { id, newState } = action.payload;
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.state = newState;
      }
    }

  },
});

export const { add, setState } = counterSlice.actions;

export default counterSlice.reducer;
