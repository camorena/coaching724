import React from 'react';


export interface ProfileSettingsProps {
  children?: React.ReactNode;
  className?: string;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`profilesettings ${className}`}>
      {children}
    </div>
  );
};

export default ProfileSettings;
