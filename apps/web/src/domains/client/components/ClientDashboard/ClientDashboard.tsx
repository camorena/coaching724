import React from 'react';


export interface ClientDashboardProps {
  children?: React.ReactNode;
  className?: string;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`clientdashboard ${className}`}>
      {children}
    </div>
  );
};

export default ClientDashboard;
