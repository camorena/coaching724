import React from 'react';


export interface PaymentMethodProps {
  children?: React.ReactNode;
  className?: string;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`paymentmethod ${className}`}>
      {children}
    </div>
  );
};

export default PaymentMethod;
