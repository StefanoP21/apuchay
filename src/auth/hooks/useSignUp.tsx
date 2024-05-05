import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authActions } from '..';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: authActions.signUp,
    onSuccess: (user, _variables, _context) => {
      queryClient.setQueryData(
        ['user', { name: user.name, uid: user.uid }],
        user
      );

      navigate('/courses');
    },
    onError: (error, _variables, _context) => {
      queryClient.setQueryData(['user'], error);
    },
  });

  return mutation;
};
