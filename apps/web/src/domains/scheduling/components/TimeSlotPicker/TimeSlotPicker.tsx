import React from 'react';


export interface TimeSlotPickerProps {
  children?: React.ReactNode;
  className?: string;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`timeslotpicker ${className}`}>
      {children}
    </div>
  );
};

export default TimeSlotPicker;
