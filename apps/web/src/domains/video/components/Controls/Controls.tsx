import React from 'react';


export interface ControlsProps {
  children?: React.ReactNode;
  className?: string;
}

export const Controls: React.FC<ControlsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`controls ${className}`}>
      {children}
    </div>
  );
};

export default Controls;
