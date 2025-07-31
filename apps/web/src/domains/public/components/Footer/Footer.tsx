import React from 'react';


export interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`footer ${className}`}>
      {children}
    </div>
  );
};

export default Footer;
