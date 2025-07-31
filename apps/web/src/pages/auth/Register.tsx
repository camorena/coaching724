import React from 'react';
import { RegisterForm, OAuthButtons } from '@/domains/auth/components';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="card max-w-md w-full">
        <h1 className="text-3xl font-display font-semibold mb-6 text-center">Create Account</h1>
        <OAuthButtons />
        <div className="my-4 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
