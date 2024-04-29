import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HOME</div>,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
