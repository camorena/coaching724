import React from 'react';
import { ClientList } from '@/domains/coach/components';

const ClientsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClientList />
    </div>
  );
};

export default ClientsPage;
