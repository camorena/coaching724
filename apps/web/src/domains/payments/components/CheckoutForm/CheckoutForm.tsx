import React from 'react';


export interface CheckoutFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`checkoutform ${className}`}>
      {children}
    </div>
  );
};

export default CheckoutForm;
