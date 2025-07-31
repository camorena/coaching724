import React from 'react';


export interface AdminDashboardProps {
  children?: React.ReactNode;
  className?: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`admindashboard ${className}`}>
      {children}
    </div>
  );
};

export default AdminDashboard;
