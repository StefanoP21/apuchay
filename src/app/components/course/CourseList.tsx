import { SimpleGrid } from '@chakra-ui/react';
import { type Course, CourseCard, usePrefetchCourse } from '../..';

interface CourseListProps {
  courses: Course[];
}

export const CourseList = ({ courses }: CourseListProps) => {
  const { prefetchCourse } = usePrefetchCourse();

  return (
    <SimpleGrid minChildWidth="xs" spacing={10}>
      {courses.map((course) => (
        <CourseCard
          key={course.courseCode}
          course={course}
          prefetchCourse={prefetchCourse}
        />
      ))}
    </SimpleGrid>
  );
};
