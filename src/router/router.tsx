import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../shared';
import { AppLayout, HomePage, ProjectsPage } from '../app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    ],
  },
]);
