import React from 'react';


export interface WhiteboardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Whiteboard: React.FC<WhiteboardProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`whiteboard ${className}`}>
      {children}
    </div>
  );
};

export default Whiteboard;
