import React from 'react';


export interface ForgotPasswordFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`forgotpasswordform ${className}`}>
      {children}
    </div>
  );
};

export default ForgotPasswordForm;
