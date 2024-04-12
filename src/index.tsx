import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { routes } from '@/config/routes';
import { queryClient } from '@/config/api';

import './styles/global.css';
import 'react-multi-carousel/lib/styles.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  //</React.StrictMode>
);
