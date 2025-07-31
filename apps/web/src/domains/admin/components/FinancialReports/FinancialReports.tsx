import React from 'react';


export interface FinancialReportsProps {
  children?: React.ReactNode;
  className?: string;
}

export const FinancialReports: React.FC<FinancialReportsProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`financialreports ${className}`}>
      {children}
    </div>
  );
};

export default FinancialReports;
