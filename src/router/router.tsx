import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../shared';
import {
  AppLayout,
  HomePage,
  ProjectsPage,
  LearnPage,
  ProjectByIdPage,
} from '../app';

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
      {
        path: 'learn',
        element: <LearnPage />,
      },
      {
        path: 'projects/:id',
        element: <ProjectByIdPage />,
      },
    ],
  },
]);
