import { useQueryClient } from '@tanstack/react-query';
import { projectActions } from '../..';

export const usePrefetchProject = () => {
  const queryClient = useQueryClient();

  const prefetchProject = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['project', { id }],
      queryFn: () => projectActions.getProjectById(id),
    });
  };

  return { prefetchProject };
};
