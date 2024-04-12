import { Navigate } from 'react-router';
import { Layout } from '../components/Layout';
import { Movie } from '../pages/Movie';
import { Movies } from '../pages/Movies';

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
    path: '*',
    element: <Navigate to={'/movies'} />,
  },
];

export { routes };
