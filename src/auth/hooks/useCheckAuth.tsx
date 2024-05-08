import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authActions } from '..';

export const useCheckAuth = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: authActions.checkAuth,
    onSuccess: (user, _variables, _context) => {
      queryClient.setQueryData(
        ['user', { name: user.name, uid: user.uid }],
        user
      );
    },
    onError: (error, _variables, _context) => {
      queryClient.setQueryData(['user'], error);
    },
  });

  return mutation;
};
