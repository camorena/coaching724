import React from 'react';


export interface HeroProps {
  children?: React.ReactNode;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`hero ${className}`}>
      {children}
    </div>
  );
};

export default Hero;
