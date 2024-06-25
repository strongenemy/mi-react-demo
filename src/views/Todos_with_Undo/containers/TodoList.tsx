import { setState } from '@/redux/reducers/addTodoSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "@hi-ui/button"

const TodoList: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'done' | 'close'>('all');
  const todoList = useSelector((state) => state.addTodo.todoList);
  const dispatch = useDispatch();

  const filteredTodos = filter === 'all' ? todoList : todoList.filter(todo => todo.state === filter);

  const handleStateChange = (id: number, newState: 'active' | 'done' | 'close') => {
    dispatch(setState({ id, newState }));
  };

  const radioList = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'done', label: 'Done' },
    { value: 'close', label: 'Close' },
  ];

  return (
    <div className="todo-list">
      <div>
        {radioList.map((item) => (
          <label key={item.value}>
            <input
              type="radio"
              value={item.value}
              checked={filter === item.value}
              onChange={() => setFilter(item.value as 'all' | 'active' | 'done' | 'close')}
            />
            {item.label}
          </label>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Content</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.content}</td>
              <td>
                <span className={`tag ${todo.state}`}>{todo.state}</span>
              </td>
              <td>
                <Button type="success" disabled={todo.state === 'active'} onClick={() => handleStateChange(todo.id, 'active')}>Set Active</Button>
                <Button type="default" disabled={todo.state === 'done'} onClick={() => handleStateChange(todo.id, 'done')}>Set Done</Button>
                <Button type="danger" disabled={todo.state === 'close'} onClick={() => handleStateChange(todo.id, 'close')}>Set Close</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
