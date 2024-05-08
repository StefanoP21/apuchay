import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authActions } from '..';

export const useCheckAuth = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: authActions.checkAuth,
    onSuccess: (user) => {
      queryClient.setQueryData(
        ['user', { name: user.name, uid: user.uid }],
        user
      );
    },
    onError: (error) => {
      queryClient.setQueryData(['user'], error);
    },
  });

  return mutation;
};
