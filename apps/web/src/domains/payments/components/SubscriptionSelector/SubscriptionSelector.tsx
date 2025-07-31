import React from 'react';


export interface SubscriptionSelectorProps {
  children?: React.ReactNode;
  className?: string;
}

export const SubscriptionSelector: React.FC<SubscriptionSelectorProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`subscriptionselector ${className}`}>
      {children}
    </div>
  );
};

export default SubscriptionSelector;
