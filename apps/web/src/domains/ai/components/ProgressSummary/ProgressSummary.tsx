import React from 'react';


export interface ProgressSummaryProps {
  children?: React.ReactNode;
  className?: string;
}

export const ProgressSummary: React.FC<ProgressSummaryProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`progresssummary ${className}`}>
      {children}
    </div>
  );
};

export default ProgressSummary;
