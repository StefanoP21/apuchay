import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { authActions } from '..';

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: authActions.signIn,
    onSuccess: (user, _variables, _context) => {
      console.log(user);

      queryClient.setQueryData(
        ['user', { name: user.name, uid: user.uid }],
        user
      );

      navigate('/courses');
    },
    onError: (error, _variables, _context) => {
      console.log(error);

      queryClient.setQueryData(['user', {}], {});
    },
  });

  return mutation;
};
