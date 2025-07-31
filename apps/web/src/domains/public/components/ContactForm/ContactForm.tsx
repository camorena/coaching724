import React from 'react';


export interface ContactFormProps {
  children?: React.ReactNode;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`contactform ${className}`}>
      {children}
    </div>
  );
};

export default ContactForm;
