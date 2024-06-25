import React, { ChangeEvent, useState } from 'react';
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
      <div className="input-basic__wrap">
        <Input
          placeholder="请输入"
          value={inputValue}
          onChange={(evt: ChangeEvent<HTMLInputElement>, value: string) => {
            setInputValue(value)
          }} />
       </div>
        <Button type="primary" size="lg" onClick={handleSubmit} style={{width:'100px'}}>
          Add Todo
        </Button>
    </div>
  );
}
export default Addtodo;