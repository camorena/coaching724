import React from 'react';


export interface AnalyticsDashboardProps {
  children?: React.ReactNode;
  className?: string;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`analyticsdashboard ${className}`}>
      {children}
    </div>
  );
};

export default AnalyticsDashboard;
