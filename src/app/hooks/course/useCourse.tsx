import { useQuery } from '@tanstack/react-query';
import { type Course, courseActions } from '../..';

interface Options {
  id: number;
}

export const useCourse = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: course = {} as Course,
    isFetching,
  } = useQuery({
    queryKey: ['courses', { id }],
    queryFn: () => courseActions.getCourseById(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isError,
    error,
    course,
    isFetching,
  };
};
