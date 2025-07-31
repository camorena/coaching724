import React from 'react';


export interface ClientListProps {
  children?: React.ReactNode;
  className?: string;
}

export const ClientList: React.FC<ClientListProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`clientlist ${className}`}>
      {children}
    </div>
  );
};

export default ClientList;
