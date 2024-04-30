import { SimpleGrid } from '@chakra-ui/react';
import { LearnCard } from '../';

interface LearnListProps {
  courses: any[];
}

export const LearnList = ({ courses }: LearnListProps) => {
  return (
    <SimpleGrid minChildWidth="xs" spacing={10}>
      {courses.map((course) => (
        <LearnCard key={course.courseCod} course={course} />
      ))}
    </SimpleGrid>
  );
};
