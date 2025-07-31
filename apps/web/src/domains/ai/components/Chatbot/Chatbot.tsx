import React from 'react';


export interface ChatbotProps {
  children?: React.ReactNode;
  className?: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`chatbot ${className}`}>
      {children}
    </div>
  );
};

export default Chatbot;
