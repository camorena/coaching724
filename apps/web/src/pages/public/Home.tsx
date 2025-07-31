import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="card max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-display font-semibold mb-4">
          Welcome to <span className="text-primary">Coaching724</span>
        </h1>
        <p className="text-lg mb-8">
          A scalable, secure, enterprise-grade coaching platform.
        </p>
      </div>
    </div>
  );
};

export default Home;
