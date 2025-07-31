import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  noIndex?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Coaching724 - Professional Coaching Platform',
  description = 'Find expert coaches for personal and professional development on Coaching724. Connect with certified coaches for personalized guidance.',
  keywords = 'coaching, professional development, career coaching, life coaching, executive coaching',
  noIndex = false,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Coaching724" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
