import React from 'react';


export interface SessionHistoryProps {
  children?: React.ReactNode;
  className?: string;
}

export const SessionHistory: React.FC<SessionHistoryProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`sessionhistory ${className}`}>
      {children}
    </div>
  );
};

export default SessionHistory;
