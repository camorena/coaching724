import React from 'react';


export interface RegisterFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`registerform ${className}`}>
      {children}
    </div>
  );
};

export default RegisterForm;
