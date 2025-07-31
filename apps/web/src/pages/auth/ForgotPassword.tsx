import React from 'react';
import { ForgotPasswordForm } from '@/domains/auth/components';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="card max-w-md w-full">
        <h1 className="text-3xl font-display font-semibold mb-6 text-center">Reset Password</h1>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
