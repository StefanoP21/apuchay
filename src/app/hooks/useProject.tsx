import { useQuery } from '@tanstack/react-query';
import { type Project, projectActions } from '../';

interface Options {
  id: string;
}

export const useProject = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: project = {} as Project,
    isFetching,
  } = useQuery({
    queryKey: ['project', { id }],
    queryFn: () => projectActions.getProjectById(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isError,
    error,
    project,
    isFetching,
  };
};
