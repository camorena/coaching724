import React from 'react';


export interface TwoFactorAuthProps {
  children?: React.ReactNode;
  className?: string;
}

export const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`twofactorauth ${className}`}>
      {children}
    </div>
  );
};

export default TwoFactorAuth;
