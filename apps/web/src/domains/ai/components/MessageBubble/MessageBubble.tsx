import React from 'react';


export interface MessageBubbleProps {
  children?: React.ReactNode;
  className?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`messagebubble ${className}`}>
      {children}
    </div>
  );
};

export default MessageBubble;
