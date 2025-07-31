import React from 'react';


export interface LoginFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`loginform ${className}`}>
      {children}
    </div>
  );
};

export default LoginForm;
