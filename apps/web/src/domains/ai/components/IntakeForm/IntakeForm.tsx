import React from 'react';


export interface IntakeFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const IntakeForm: React.FC<IntakeFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`intakeform ${className}`}>
      {children}
    </div>
  );
};

export default IntakeForm;
