import React from 'react';


export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`header ${className}`}>
      {children}
    </div>
  );
};

export default Header;
