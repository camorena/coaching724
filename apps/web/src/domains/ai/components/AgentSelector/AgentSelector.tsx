import React from 'react';


export interface AgentSelectorProps {
  children?: React.ReactNode;
  className?: string;
}

export const AgentSelector: React.FC<AgentSelectorProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className={`agentselector ${className}`}>
      {children}
    </div>
  );
};

export default AgentSelector;
