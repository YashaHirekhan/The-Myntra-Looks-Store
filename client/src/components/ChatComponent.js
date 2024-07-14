import React, { useState } from 'react';
import './ChatComponent.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { text: 'Aw Thank you so much', sender: 'other' },
    { text: 'Thought this look would look pretty on you', sender: 'self' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'self' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="user-list">
        {Array(7).fill().map((_, index) => (
          <div key={index} className="user">
            <div className="user-avatar"></div>
            <div className="user-name">User</div>
          </div>
        ))}
      </div>
      <div className="chat-area">
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'self' ? 'self' : 'other'}`}
            >
              <div className="message-bubble">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
