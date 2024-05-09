import { useQueryClient } from '@tanstack/react-query';
import { projectActions } from '../..';

export const usePrefetchProjects = () => {
  const queryClient = useQueryClient();

  const prefetchProjects = () => {
    queryClient.prefetchQuery({
      queryKey: ['projects'],
      queryFn: () => projectActions.getProjects(),
    });
  };

  return { prefetchProjects };
};
