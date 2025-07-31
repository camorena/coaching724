import React from 'react';


export interface DropdownProps {
  children?: React.ReactNode;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`dropdown ${className}`}>
      {children}
    </div>
  );
};

export default Dropdown;
