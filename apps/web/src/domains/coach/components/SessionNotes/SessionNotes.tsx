import React from 'react';


export interface SessionNotesProps {
  children?: React.ReactNode;
  className?: string;
}

export const SessionNotes: React.FC<SessionNotesProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`sessionnotes ${className}`}>
      {children}
    </div>
  );
};

export default SessionNotes;
