import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { text: input, sender: 'user', type: 'text' }]);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botReply = getBotReply(input);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: botReply, sender: 'bot', type: 'text' }
      ]);
    }, 500);

    setInput('');
  };

  const getBotReply = (userInput) => {
    if (userInput.toLowerCase().includes('hello')) return 'Hello! How can I assist you today?';
    if (userInput.toLowerCase().includes('help')) return 'Sure, I am here to help!';
    return 'Sorry, I didn’t understand that.';
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src="/images/avatar.jpg" alt="User Avatar" className="avatar" />
        <div className="user-info">
          <h3>John Doe</h3>
          <p className="status">Online</p>
        </div>
        <div className="header-options">...</div>
      </div>
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.type === 'text' && <p>{msg.text}</p>}
              {msg.type === 'audio' && (
                <audio controls>
                  <source src={msg.text} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Message..."
          />
          <button onClick={handleSend}>
            <img src="/images/save-icon.png" alt="Send Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
