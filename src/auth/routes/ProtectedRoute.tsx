import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem('token') as string;

  if (!token) {
    return <Navigate to="/auth/signin" />;
  }

  return children;
};
