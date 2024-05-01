import { useQuery } from '@tanstack/react-query';
import { projectActions } from '../';

export const useProjects = () => {
  const {
    isLoading,
    isError,
    error,
    data: projects = [],
    isFetching,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: () => projectActions.getProjects(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isError,
    error,
    projects,
    isFetching,
  };
};
