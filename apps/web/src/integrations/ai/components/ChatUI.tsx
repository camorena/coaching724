import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../hooks';
import { ChatMessage } from '../types';

interface ChatUIProps {
  agentId?: string;
  initialMessages?: ChatMessage[];
  sessionId?: string;
  title?: string;
  onMessageSent?: (message: ChatMessage) => void;
}

export const ChatUI: React.FC<ChatUIProps> = ({
  agentId = 'chatbot',
  initialMessages,
  sessionId,
  title = 'Coaching Assistant',
  onMessageSent,
}) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    agentConfig,
  } = useChat({
    agentId,
    initialMessages,
    sessionId,
    onResponse: onMessageSent,
  });
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userInput = input;
    setInput('');
    
    await sendMessage(userInput, { stream: true });
  };
  
  return (
    <div className="flex flex-col h-full max-h-[600px] border border-gray-200 rounded-lg overflow-hidden">
      {/* Chat header */}
      <div className="bg-primary p-4 text-white flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-xs opacity-80">{agentConfig.description}</p>
        </div>
        <button
          onClick={clearMessages}
          className="text-sm px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors"
        >
          Clear
        </button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.filter(m => m.role !== 'system').map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary text-white rounded-tr-none'
                  : 'bg-white border border-gray-200 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200 rounded-tl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="flex justify-center">
            <div className="max-w-[80%] rounded-lg p-3 bg-red-50 border border-red-200 text-red-600">
              <p>Error: {error.message}</p>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary text-white rounded-full p-2 w-10 h-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
