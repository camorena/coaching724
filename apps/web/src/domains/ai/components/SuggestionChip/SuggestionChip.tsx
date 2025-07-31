import React from 'react';


export interface SuggestionChipProps {
  children?: React.ReactNode;
  className?: string;
}

export const SuggestionChip: React.FC<SuggestionChipProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`suggestionchip ${className}`}>
      {children}
    </div>
  );
};

export default SuggestionChip;
