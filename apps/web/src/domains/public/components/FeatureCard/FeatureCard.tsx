import React from 'react';


export interface FeatureCardProps {
  children?: React.ReactNode;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`featurecard ${className}`}>
      {children}
    </div>
  );
};

export default FeatureCard;
