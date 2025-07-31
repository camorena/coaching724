import React from 'react';


export interface OAuthButtonsProps {
  children?: React.ReactNode;
  className?: string;
}

export const OAuthButtons: React.FC<OAuthButtonsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`oauthbuttons ${className}`}>
      {children}
    </div>
  );
};

export default OAuthButtons;
