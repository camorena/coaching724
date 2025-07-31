import React from 'react';
import { UserManagement } from '@/domains/admin/components';

const UsersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <UserManagement />
    </div>
  );
};

export default UsersPage;
