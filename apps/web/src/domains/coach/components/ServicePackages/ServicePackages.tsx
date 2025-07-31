import React from 'react';


export interface ServicePackagesProps {
  children?: React.ReactNode;
  className?: string;
}

export const ServicePackages: React.FC<ServicePackagesProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`servicepackages ${className}`}>
      {children}
    </div>
  );
};

export default ServicePackages;
