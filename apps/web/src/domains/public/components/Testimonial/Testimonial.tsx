import React from 'react';


export interface TestimonialProps {
  children?: React.ReactNode;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`testimonial ${className}`}>
      {children}
    </div>
  );
};

export default Testimonial;
