import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ErrorPage } from '../shared';
import {
  AppLayout,
  HomePage,
  ProjectsPage,
  CoursePage,
  ProjectByIdPage,
  CourseByIdPage,
} from '../app';
import { SigninPage, SignupPage } from '../auth';
import { ProtectedRoute } from '../auth/routes/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/*',
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
        element: (
          <ProtectedRoute>
            <CourseByIdPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '/auth/*',
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signin',
        element: <SigninPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: '*',
        element: <Navigate to="/auth/signin" />,
      },
    ],
  },
]);
