import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useCheckAuth } from '..';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const mutation = useCheckAuth();

  useEffect(() => {
    mutation.mutate();
  }, []);

  if (mutation.isError) {
    return <Navigate to="/auth/signin" />;
  }

  return children;
};
