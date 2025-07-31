// This file contains type definitions for react-router-dom v6
// since @types/react-router-dom only goes up to 5.3.3

import 'react-router-dom';

declare module 'react-router-dom' {
  export interface RouterOptions {
    future?: {
      v7_startTransition?: boolean;
      v7_relativeSplatPath?: boolean;
    };
  }

  export function createBrowserRouter(
    routes: RouteObject[],
    opts?: RouterOptions
  ): RemixRouter;
}
