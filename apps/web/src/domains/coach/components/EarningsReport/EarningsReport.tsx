import React from 'react';


export interface EarningsReportProps {
  children?: React.ReactNode;
  className?: string;
}

export const EarningsReport: React.FC<EarningsReportProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`earningsreport ${className}`}>
      {children}
    </div>
  );
};

export default EarningsReport;
