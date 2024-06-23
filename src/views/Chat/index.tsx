import React, { useState, useEffect } from 'react';
import './index.scss';
import Input from "@hi-ui/input"
import { ExpressionOutlined, AudioOutlined, MessageOutlined } from "@hi-ui/icons"


const Chat = () => {
  // const [tableData, setTableData] = useState<TableDataItem[]>([]);

  useEffect(() => {
   
  }, []);

  return (
    <div className='userChat'>
      <div className='header'>
      </div>
      <div className='content'></div>
      <div className='footer'>
      <Input
          appearance="filled"
          size="md"
          clearable
          placeholder="请输入"
          prepend={<ExpressionOutlined />}
          prefix={<MessageOutlined />}
          suffix={<AudioOutlined />}
          append={<div>Send</div>}
        ></Input>
      </div>
    </div>
  );
};

export default Chat;