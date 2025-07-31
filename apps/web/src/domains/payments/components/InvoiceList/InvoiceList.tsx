import React from 'react';


export interface InvoiceListProps {
  children?: React.ReactNode;
  className?: string;
}

export const InvoiceList: React.FC<InvoiceListProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`invoicelist ${className}`}>
      {children}
    </div>
  );
};

export default InvoiceList;
