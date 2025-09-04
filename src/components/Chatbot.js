import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react'; // Import the X icon for the close button
import './chatbot.css';

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const chatBodyRef = useRef(null);

  const responses = {
    hi: 'Hello! 👋',
    hello: 'Hey there! How are you?',
    help: "Sure, I'm here to help. What do you need?",
    bye: 'Goodbye! Have a nice day 😊',
  };

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const getBotResponse = (input) => {
    input = input.toLowerCase();
    return responses[input] || "I'm not sure I understand 🤔";
  };

  const handleSend = () => {
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user');
    setUserInput('');

    setTimeout(() => {
      const botReply = getBotResponse(userInput);
      addMessage(botReply, 'bot');
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        Chatbot
        <button onClick={onClose} className="close-btn">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="chat-body" id="chat-body" ref={chatBodyRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          id="user-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button id="send-btn" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;