import React from 'react';
import { AdminDashboard } from '@/domains/admin/components';

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminDashboard />
    </div>
  );
};

export default AdminDashboardPage;
