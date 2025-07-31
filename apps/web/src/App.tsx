import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes';
import { ThemeProvider } from './components/theme';
import './i18n';

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <ThemeProvider defaultTheme="system" storageKey="coaching724-theme">
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
