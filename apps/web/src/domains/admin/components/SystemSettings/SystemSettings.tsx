import React from 'react';


export interface SystemSettingsProps {
  children?: React.ReactNode;
  className?: string;
}

export const SystemSettings: React.FC<SystemSettingsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`systemsettings ${className}`}>
      {children}
    </div>
  );
};

export default SystemSettings;
