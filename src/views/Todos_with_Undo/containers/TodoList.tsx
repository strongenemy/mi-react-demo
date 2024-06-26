import { setState, undo, redo } from '@/redux/reducers/addTodoSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "@hi-ui/button"
import { Radio } from "@hi-ui/radio"
import Tag from "@hi-ui/tag"
import Table from "@hi-ui/table"

const TodoList: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'done' | 'close'>('all');
  const todoList = useSelector((state: any) => state.addTodo.todoList);
  const actionNumber = useSelector((state: any) => state.addTodo.actionNumber);
  const actionItem = useSelector((state: any) => state.addTodo.actionItem);
  const dispatch = useDispatch();

  const filteredTodos = filter === 'all' ? todoList : todoList.filter((todo: any) => todo.state === filter);

  const handleStateChange = (id: number, newState: 'active' | 'done' | 'close') => {
    dispatch(setState({ id, newState }));
  };

  const handleUndo = () => {
    dispatch(undo());
  };

  const handleRedo = () => {
    dispatch(redo());
  };

  const radioList = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'done', label: 'Done' },
    { value: 'close', label: 'Close' },
  ];

  const columns = [
    // {
    //   title: "id",
    //   dataKey: "id",
    //   width: 50
    // },
    {
      title: "Content",
      dataKey: "content",
      width: 150
    },
    {
      title: "State",
      dataKey: "state",
      render: (text: string) => (
        <Tag type={text === 'active' ? "success" : text === 'close' ? "danger" : "default"}>{text}</Tag>
      ),
      width: 100
    },
    {
      title: "Actions",
      dataKey: "actions",
      render: (text: any, row: any) => (
        <div>
          <Button type="success" disabled={row.state === 'active'} onClick={() => handleStateChange(row.id, 'active')}>Set Active</Button>
          <Button type="default" disabled={row.state === 'done'} onClick={() => handleStateChange(row.id, 'done')}>Set Done</Button>
          <Button type="danger" disabled={row.state === 'close'} onClick={() => handleStateChange(row.id, 'close')}>Set Close</Button>
        </div>
      ),
      width: 300
    },
  ];

  const data = filteredTodos.map((todo: any) => ({
    ...todo,
    key: todo.id,
  }));

  return (
    <div className="todo-list">
      <div className='filter-state'>
        <div>
          {radioList.map((item) => (
            <Radio
              key={item.value}
              value={item.value}
              checked={filter === item.value}
              onChange={() => setFilter(item.value as 'all' | 'active' | 'done' | 'close')}>
              {item.label}
            </Radio>
          ))}
        </div>
        <div className="actions">
          <Button key='undo' disabled={actionNumber <= 0}  type="primary" onClick={handleUndo}>Undo</Button>
          <Button key='redo' disabled={actionNumber >= actionItem.length - 1} type="primary" onClick={handleRedo}>Redo</Button>
        </div>
      </div>
      <Table
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default TodoList;
