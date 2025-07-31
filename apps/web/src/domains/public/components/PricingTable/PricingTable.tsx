import React from 'react';


export interface PricingTableProps {
  children?: React.ReactNode;
  className?: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`pricingtable ${className}`}>
      {children}
    </div>
  );
};

export default PricingTable;
