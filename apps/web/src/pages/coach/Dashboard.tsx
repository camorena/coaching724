import React from 'react';
import { CoachDashboard } from '@/domains/coach/components';

const CoachDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <CoachDashboard />
    </div>
  );
};

export default CoachDashboardPage;
