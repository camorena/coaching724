import React from 'react';


export interface FAQProps {
  children?: React.ReactNode;
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`faq ${className}`}>
      {children}
    </div>
  );
};

export default FAQ;
