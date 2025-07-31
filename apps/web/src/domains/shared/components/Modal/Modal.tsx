import React from 'react';


export interface ModalProps {
  children?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`modal ${className}`}>
      {children}
    </div>
  );
};

export default Modal;
