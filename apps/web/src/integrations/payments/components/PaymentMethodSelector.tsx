import React, { useState } from 'react';
import { PaymentMethod } from '../types';

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  selectedId?: string;
  onSelect: (methodId: string) => void;
  onDelete?: (methodId: string) => void;
  onSetDefault?: (methodId: string) => void;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  selectedId,
  onSelect,
  onDelete,
  onSetDefault,
}) => {
  const [selected, setSelected] = useState<string>(selectedId || (methods[0]?.id || ''));
  
  const handleSelect = (methodId: string) => {
    setSelected(methodId);
    onSelect(methodId);
  };
  
  if (methods.length === 0) {
    return (
      <div className="p-4 border border-gray-200 rounded-lg">
        <p className="text-gray-500">No payment methods available.</p>
      </div>
    );
  }
  
  return (
    <div className="payment-method-selector">
      <div className="space-y-3">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`border rounded-lg overflow-hidden transition-all ${
              selected === method.id
                ? 'border-primary'
                : 'border-gray-200'
            }`}
          >
            <div
              className={`p-4 flex items-center justify-between cursor-pointer ${
                selected === method.id ? 'bg-primary/5' : 'hover:bg-gray-50'
              }`}
              onClick={() => handleSelect(method.id)}
            >
              <div className="flex items-center">
                <div className="mr-3">
                  <input
                    type="radio"
                    checked={selected === method.id}
                    onChange={() => handleSelect(method.id)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                </div>
                
                <div>
                  {method.type === 'card' && (
                    <>
                      <p className="font-medium">
                        {method.brand} •••• {method.lastFour}
                      </p>
                      <p className="text-sm text-gray-500">
                        Expires {method.expiryMonth}/{method.expiryYear}
                      </p>
                    </>
                  )}
                  
                  {method.type === 'bank_account' && (
                    <>
                      <p className="font-medium">
                        {method.bankName} •••• {method.lastFour}
                      </p>
                      <p className="text-sm text-gray-500">
                        {method.accountType}
                      </p>
                    </>
                  )}
                  
                  {method.type === 'paypal' && (
                    <p className="font-medium">PayPal</p>
                  )}
                  
                  {method.isDefault && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                      Default
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2">
                {!method.isDefault && onSetDefault && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSetDefault(method.id);
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Set Default
                  </button>
                )}
                
                {onDelete && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(method.id);
                    }}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
