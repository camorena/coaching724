import React from 'react';


export interface TimezoneSelectorProps {
  children?: React.ReactNode;
  className?: string;
}

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`timezoneselector ${className}`}>
      {children}
    </div>
  );
};

export default TimezoneSelector;
