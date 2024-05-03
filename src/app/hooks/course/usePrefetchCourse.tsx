import { useQueryClient } from '@tanstack/react-query';
import { courseActions } from '../..';

export const usePrefetchCourse = () => {
  const queryClient = useQueryClient();

  const prefetchCourse = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ['courses', { id }],
      queryFn: () => courseActions.getCourseById(id),
    });
  };

  return { prefetchCourse };
};
