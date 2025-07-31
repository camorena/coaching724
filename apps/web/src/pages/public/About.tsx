import React from 'react';
import { Header, Footer } from '@/domains/public/components';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-semibold mb-6">About Coaching724</h1>
        <div className="prose max-w-none">
          <p>Coaching724 is a scalable, secure, highly-profitable, enterprise-grade coaching platform.</p>
          <p>Our mission is to connect coaches with clients around the world, providing the tools and technology needed for effective coaching relationships.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
