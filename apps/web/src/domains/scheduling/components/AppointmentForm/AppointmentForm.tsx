import React from 'react';


export interface AppointmentFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`appointmentform ${className}`}>
      {children}
    </div>
  );
};

export default AppointmentForm;
