import React from 'react';


export interface CoachProfileProps {
  children?: React.ReactNode;
  className?: string;
}

export const CoachProfile: React.FC<CoachProfileProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`coachprofile ${className}`}>
      {children}
    </div>
  );
};

export default CoachProfile;
