import React from 'react';
import { Header, Footer, PricingTable } from '@/domains/public/components';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-semibold mb-6">Our Services</h1>
        <PricingTable />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
