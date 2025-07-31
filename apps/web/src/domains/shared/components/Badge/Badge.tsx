import React from 'react';


export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`badge ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
