import React from 'react';


export interface PaymentStatusProps {
  children?: React.ReactNode;
  className?: string;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`paymentstatus ${className}`}>
      {children}
    </div>
  );
};

export default PaymentStatus;
