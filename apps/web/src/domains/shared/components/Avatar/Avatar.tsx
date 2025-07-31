import React from 'react';


export interface AvatarProps {
  children?: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`avatar ${className}`}>
      {children}
    </div>
  );
};

export default Avatar;
