import React from 'react';


export interface NotificationSettingsProps {
  children?: React.ReactNode;
  className?: string;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`notificationsettings ${className}`}>
      {children}
    </div>
  );
};

export default NotificationSettings;
