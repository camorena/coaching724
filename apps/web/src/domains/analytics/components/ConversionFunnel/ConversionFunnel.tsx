import React from 'react';


export interface ConversionFunnelProps {
  children?: React.ReactNode;
  className?: string;
}

export const ConversionFunnel: React.FC<ConversionFunnelProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`conversionfunnel ${className}`}>
      {children}
    </div>
  );
};

export default ConversionFunnel;
