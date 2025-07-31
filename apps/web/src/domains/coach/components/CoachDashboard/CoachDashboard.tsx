import React from 'react';


export interface CoachDashboardProps {
  children?: React.ReactNode;
  className?: string;
}

export const CoachDashboard: React.FC<CoachDashboardProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`coachdashboard ${className}`}>
      {children}
    </div>
  );
};

export default CoachDashboard;
