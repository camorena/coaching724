import React from 'react';


export interface ChatPanelProps {
  children?: React.ReactNode;
  className?: string;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`chatpanel ${className}`}>
      {children}
    </div>
  );
};

export default ChatPanel;
