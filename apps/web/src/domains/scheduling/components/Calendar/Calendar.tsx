import React from 'react';


export interface CalendarProps {
  children?: React.ReactNode;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`calendar ${className}`}>
      {children}
    </div>
  );
};

export default Calendar;
