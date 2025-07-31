import React from 'react';


export interface ScreenShareProps {
  children?: React.ReactNode;
  className?: string;
}

export const ScreenShare: React.FC<ScreenShareProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`screenshare ${className}`}>
      {children}
    </div>
  );
};

export default ScreenShare;
