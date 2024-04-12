import { Navigate } from 'react-router';
import { Layout } from '@/components/Layout';
import { Movie } from '@/pages/Movie';
import { Movies } from '@/pages/Movies';
import { Login } from '@/pages/Login';
import { Random } from '@/pages/Random';
import { AuthLayout } from '@/components/AuthLayout';

const routes = [
  {
    path: 'movies',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: ':movieId',
        element: <Movie />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '',
    element: <AuthLayout />,
    children: [
      {
        path: '/random',
        element: <Random />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/movies'} />,
  },
];

export { routes };
