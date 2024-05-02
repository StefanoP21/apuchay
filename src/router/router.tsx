import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../shared';
import {
  AppLayout,
  HomePage,
  ProjectsPage,
  CoursePage,
  ProjectByIdPage,
  CourseByIdPage,
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
        path: 'projects/:id',
        element: <ProjectByIdPage />,
      },
      {
        path: 'courses',
        element: <CoursePage />,
      },
      {
        path: 'courses/:id',
        element: <CourseByIdPage />,
      },
    ],
  },
]);
