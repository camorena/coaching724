import React from 'react';


export interface ChartProps {
  children?: React.ReactNode;
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`chart ${className}`}>
      {children}
    </div>
  );
};

export default Chart;
