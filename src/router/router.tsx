import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../shared';
import { AppLayout } from '../app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <div>Home</div>,
      },
    ],
  },
]);
