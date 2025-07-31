import React from 'react';


export interface MetricCardProps {
  children?: React.ReactNode;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`metriccard ${className}`}>
      {children}
    </div>
  );
};

export default MetricCard;
