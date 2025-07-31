import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

// Create router with future flags enabled
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

export default router;
