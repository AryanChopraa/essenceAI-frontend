import React, { useRef, useState } from 'react';

const Chatbotbot = () => {
  const messagesRef = useRef([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  const handleMessagesArray = (role, content) => {
    messagesRef.current = [
      ...messagesRef.current,
      {
        role: role,
        content: content
      }
    ];
    setConversation([...messagesRef.current]);
  }

  const fetchResults = async () => {
    const response = await fetch('http://localhost:3001/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: messagesRef.current }),
    });
    const data = await response.json();
    return data;
  }

  const handleSubmit = async () => {
    setLoading(true);
    handleMessagesArray("user", searchTerm);
    const res = await fetchResults();
    handleMessagesArray("assistant", res.openAIresponse.content);
    setLoading(false);
    setSearchTerm('');
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-grow flex flex-col justify-end p-6">
        <div className="flex flex-col space-y-2">
          {conversation.map((message, index) => (
            <div key={index} className={`rounded-lg p-2 ${message.role === 'user' ? 'bg-green-200 self-end' : 'bg-gray-200'}`}>
              {message.content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex p-4">
        <input
          className="flex-grow border rounded-full px-4 py-2 mr-2"
          placeholder="Type your message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
          type="button"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Chatbotbot;
