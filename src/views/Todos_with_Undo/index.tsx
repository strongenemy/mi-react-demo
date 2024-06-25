
import { Provider } from "react-redux";
import store from "@/redux/store.tsx";
import AddTodo from "./containers/AddTodo.tsx";
import TodoList from "./containers/TodoList.tsx";
import './index.scss';

const TodoWithUndo = () => {

  return <div className="todo">
              <Provider store={store}>
                <AddTodo/>
                <TodoList/>
              </Provider>
          </div>
}
export default TodoWithUndo