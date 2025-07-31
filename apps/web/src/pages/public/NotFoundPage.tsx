import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout';

const NotFoundPage: React.FC = () => {
  return (
    <MainLayout
      title="Page Not Found | Coaching724"
      description="The page you are looking for could not be found. Return to the Coaching724 homepage."
    >
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-display font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
          <p className="text-foreground/70 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
