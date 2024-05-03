import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const status = 'authenticated';

  if (status !== 'authenticated') {
    return <Navigate to="/auth/signin" />;
  }

  return children;
};
