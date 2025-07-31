import React from 'react';


export interface CoachManagementProps {
  children?: React.ReactNode;
  className?: string;
}

export const CoachManagement: React.FC<CoachManagementProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`coachmanagement ${className}`}>
      {children}
    </div>
  );
};

export default CoachManagement;
