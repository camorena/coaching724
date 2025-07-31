import React from 'react';
import { Header, Footer, ContactForm } from '@/domains/public/components';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-semibold mb-6">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
