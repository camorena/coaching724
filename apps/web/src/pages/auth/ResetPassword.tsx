import React from 'react';
import { ResetPasswordForm } from '@/domains/auth/components';

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="card max-w-md w-full">
        <h1 className="text-3xl font-display font-semibold mb-6 text-center">Set New Password</h1>
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
