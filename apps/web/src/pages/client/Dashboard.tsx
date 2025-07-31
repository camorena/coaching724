import React from 'react';
import { ClientDashboard } from '@/domains/client/components';

const ClientDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClientDashboard />
    </div>
  );
};

export default ClientDashboardPage;
