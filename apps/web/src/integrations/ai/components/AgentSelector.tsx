import React from 'react';
import { agentConfigs } from '../service';

interface AgentSelectorProps {
  selectedAgentId: string;
  onChange: (agentId: string) => void;
}

export const AgentSelector: React.FC<AgentSelectorProps> = ({
  selectedAgentId,
  onChange,
}) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h3 className="font-semibold mb-2">Select Assistant</h3>
      <div className="space-y-2">
        {Object.values(agentConfigs).map((agent) => (
          <button
            key={agent.id}
            onClick={() => onChange(agent.id)}
            className={`w-full text-left p-2 rounded-md transition-colors ${
              agent.id === selectedAgentId
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="font-medium">{agent.name}</div>
            <div className="text-xs ${agent.id === selectedAgentId ? 'text-white/80' : 'text-gray-500'}">
              {agent.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
