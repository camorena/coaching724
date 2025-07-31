import React from 'react';
import { useTranslation } from '../i18n/hooks';

interface LocalizedWelcomeProps {
  name?: string;
}

export const LocalizedWelcome: React.FC<LocalizedWelcomeProps> = ({ 
  name = 'User' 
}) => {
  const { t } = useTranslation('coaching');
  
  return (
    <div className="p-4 bg-primary/10 rounded-lg">
      <h2 className="text-xl font-semibold">
        {t('dashboard.welcome', { name })}
      </h2>
      <p className="mt-2">
        {t('common:app.tagline')}
      </p>
    </div>
  );
};
