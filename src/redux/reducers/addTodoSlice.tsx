import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoItem {
  id: number;
  content: string;
  state: 'active' | 'done' | 'close';
}
interface ActionItem {
  id: number;
  content: string;
  state: 'active' | 'done' | 'close';
  type:'add' | 'change'
}

interface TodoState {
  todoList: TodoItem[];
  actionItem: ActionItem[];
  actionNumber: number;
}

const initialState: TodoState = {
  todoList: [{ id: 0, content: "Sample Todo", state: "active" }],
  actionItem: [{ id: 0, content: "Sample Todo", state: "active", type: "add" }],
  actionNumber: 0
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
      // 缓存代办事项
      const newActionItem: ActionItem = {
        id: newTodo.id,
        content: newTodo.content,
        state: newTodo.state,
        type: 'add',
      };
      state.actionItem.push(newActionItem);
      state.actionNumber ++;
    },
    setState: (state, action: PayloadAction<{ id: number, newState: 'active' | 'done' | 'close' }>) => {
      const { id, newState } = action.payload;
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.state = newState;
        // 将修改后的todo存入actionItem数组中
        const newActionItem: ActionItem = {
          id: todo.id,
          content: todo.content,
          state: todo.state,
          type: 'change',
        };
        state.actionItem.push(newActionItem);
        state.actionNumber ++;
      }
    },
    undo: (state) => {
      const lastAction = state.actionItem[state.actionNumber];
      if (!lastAction) return;

      if (lastAction.type === 'add') {
        // 删除 todoList 最后一项
        state.todoList.pop();
      } else if (lastAction.type === 'change') {
        // 找到前一个 action 对应的状态
        const previousAction = state.actionItem[state.actionNumber - 1];
        const todo = state.todoList.find((todo) => todo.id === lastAction.id);

        if (todo && previousAction) {
          todo.state = previousAction.state;
        }
      }
      state.actionNumber--;
    },
    redo: (state) => {
      const nextAction = state.actionItem[state.actionNumber + 1];
      if (!nextAction) return;

      if (nextAction.type === 'add') {
        // 添加新的 todoList 项目
        const newTodo: TodoItem = {
          id: nextAction.id,
          content: nextAction.content,
          state: nextAction.state,
        };
        state.todoList.push(newTodo);
      } else if (nextAction.type === 'change') {
        // 找到对应的 todo 并更新状态
        const todo = state.todoList.find((todo) => todo.id === nextAction.id);
        if (todo) {
          todo.state = nextAction.state;
        }
      }
      state.actionNumber++;
    },
  },
});

export const { add, setState, undo, redo} = counterSlice.actions;

export default counterSlice.reducer;
