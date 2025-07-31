import React from 'react';


export interface UpcomingAppointmentsProps {
  children?: React.ReactNode;
  className?: string;
}

export const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`upcomingappointments ${className}`}>
      {children}
    </div>
  );
};

export default UpcomingAppointments;
