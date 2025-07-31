import React, { useState } from 'react';
import { PriceOption } from '../types';

interface SubscriptionSelectorProps {
  options: PriceOption[];
  selectedId?: string;
  onSelect: (priceId: string) => void;
}

export const SubscriptionSelector: React.FC<SubscriptionSelectorProps> = ({
  options,
  selectedId,
  onSelect,
}) => {
  const [selected, setSelected] = useState<string>(selectedId || '');
  
  const handleSelect = (priceId: string) => {
    setSelected(priceId);
    onSelect(priceId);
  };
  
  // Sort options by price
  const sortedOptions = [...options].sort((a, b) => a.amount - b.amount);
  
  return (
    <div className="subscription-selector">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedOptions.map((option) => (
          <div
            key={option.id}
            className={`border rounded-lg overflow-hidden transition-all ${
              selected === option.id
                ? 'border-primary shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold">{option.name}</h3>
              {option.interval && option.interval !== 'one-time' && (
                <p className="text-sm text-gray-500">
                  {option.intervalCount && option.intervalCount > 1
                    ? `Every ${option.intervalCount} ${option.interval}${
                        option.intervalCount > 1 ? 's' : ''
                      }`
                    : `${option.interval}ly`.replace('dayly', 'daily')}
                </p>
              )}
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: option.currency.toUpperCase(),
                  }).format(option.amount / 100)}
                </p>
                
                {option.interval === 'one-time' ? (
                  <p className="text-sm text-gray-500">One-time payment</p>
                ) : (
                  <p className="text-sm text-gray-500">
                    per{' '}
                    {option.intervalCount && option.intervalCount > 1
                      ? `${option.intervalCount} ${option.interval}s`
                      : option.interval}
                  </p>
                )}
              </div>
              
              {option.description && (
                <p className="text-gray-700 mb-4">{option.description}</p>
              )}
              
              {option.trialPeriodDays && (
                <p className="text-sm text-primary mb-4">
                  Includes {option.trialPeriodDays}-day free trial
                </p>
              )}
              
              <button
                onClick={() => handleSelect(option.id)}
                className={`w-full py-2 px-4 rounded-md transition-colors ${
                  selected === option.id
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {selected === option.id ? 'Selected' : 'Select'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
