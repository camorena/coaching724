import React from 'react';


export interface UserStatsProps {
  children?: React.ReactNode;
  className?: string;
}

export const UserStats: React.FC<UserStatsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`userstats ${className}`}>
      {children}
    </div>
  );
};

export default UserStats;
