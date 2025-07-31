import React from 'react';


export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`button ${className}`}>
      {children}
    </div>
  );
};

export default Button;
