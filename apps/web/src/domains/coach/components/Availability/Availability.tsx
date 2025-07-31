import React from 'react';


export interface AvailabilityProps {
  children?: React.ReactNode;
  className?: string;
}

export const Availability: React.FC<AvailabilityProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`availability ${className}`}>
      {children}
    </div>
  );
};

export default Availability;
