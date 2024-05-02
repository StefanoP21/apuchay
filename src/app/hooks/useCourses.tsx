import { useQuery } from '@tanstack/react-query';
import { courseActions } from '..';

export const useCourses = () => {
  const {
    isLoading,
    isError,
    error,
    data: courses = [],
    isFetching,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: () => courseActions.getCourses(),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isError,
    error,
    courses,
    isFetching,
  };
};
