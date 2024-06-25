import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { add } from '@/redux/reducers/addTodoSlice';
import Button from "@hi-ui/button"
import { PlusOutlined } from "@hi-ui/icons"
import Input from "@hi-ui/input"

export function Addtodo(){
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    dispatch(add(inputValue));
    setInputValue('');
  };
  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="primary" size="lg">
          Add Todo
        </Button>
      </form>
    </div>
  );
}
export default Addtodo;