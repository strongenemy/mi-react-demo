import  { useState } from 'react';
import './index.scss';
import Scrollbar from "@hi-ui/scrollbar"

interface userInfoItem {
  name: string;
  userImg: string;
}

interface msgItem {
  sender: string;
  content: string;
}

const userInfo : userInfoItem[] =[
  {name: 'User1',userImg:'../../../public/imgs/dog.jpg'},
  {name: 'User2',userImg:'../../../public/imgs/work.jpg'},
]

const getUserImgByName = (name: string): string | undefined => {
  const user = userInfo.find((user) => user.name === name);
  return user ? user.userImg : undefined;
};

const Message = ({ sender, content }: { sender: string; content: string }) => {
  const userImg = getUserImgByName(sender);

  return (
    <div className='message'>
      <div className={`msgItem ${sender === 'User1' ? 'user1' : 'user2'}`}>
        <div className={`userImg ${sender === 'User1' ? 'user1' : 'user2'}`}>
          {userImg && <img src={userImg} alt={`User ${sender}'s avatar`} />}
        </div>
        <div className={`bubble ${sender === 'User1' ? 'user1' : 'user2'}`}>
          <div className='msg'>{content}</div>
          {sender !== 'User1' && <div className='triangle'></div>}
        </div>
      </div>
    </div>
  );
};


type SendMessageFunc = (sender: string, message: string) => void;

const ChatBox = ({ sender, onSendMessage }: { sender: string, onSendMessage: SendMessageFunc }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(sender, message);
      setMessage('');
    }
  };

  return (
    <div className="chatbox">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Send as ${sender}`}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};


const ChatApp = () => {
  const [messages, setMessages] = useState<msgItem[]>([]);

  const handleSendMessage = (sender: string, content: string) => {
    setMessages([...messages , { sender, content } as msgItem]);
  };

  return (
    <div className="chat">
      <div className="chat-window">
        <Scrollbar axes={"y"}>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg?.sender as string} content={msg?.content as string} />
          ))}
        </Scrollbar>
      </div>
      {userInfo.map((user)=>(
        <ChatBox sender={user.name} onSendMessage={handleSendMessage} />
      ))}
    </div>
  );
};

export default ChatApp;
