import React from 'react';


export interface TableProps {
  children?: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`table ${className}`}>
      {children}
    </div>
  );
};

export default Table;
