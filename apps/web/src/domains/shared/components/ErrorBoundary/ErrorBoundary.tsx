import React from 'react';


export interface ErrorBoundaryProps {
  children?: React.ReactNode;
  className?: string;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`errorboundary ${className}`}>
      {children}
    </div>
  );
};

export default ErrorBoundary;
