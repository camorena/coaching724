import React from 'react';


export interface ResetPasswordFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`resetpasswordform ${className}`}>
      {children}
    </div>
  );
};

export default ResetPasswordForm;
