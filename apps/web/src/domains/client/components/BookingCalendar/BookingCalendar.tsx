import React from 'react';


export interface BookingCalendarProps {
  children?: React.ReactNode;
  className?: string;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`bookingcalendar ${className}`}>
      {children}
    </div>
  );
};

export default BookingCalendar;
