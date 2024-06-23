import { configureStore } from '@reduxjs/toolkit';
import addTodoSlice from './reducers/addTodoSlice';
// 创建一个空的 Redux store

const store = configureStore({
  reducer: {
    addTodo: addTodoSlice
  },
});
export default store