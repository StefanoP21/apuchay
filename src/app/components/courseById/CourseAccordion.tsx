import { Accordion } from '@chakra-ui/react';
import { Course, CourseAccordionItem } from '../..';

interface CourseVideoProps {
  course: Course;
}

export const CourseAccordion = ({ course }: CourseVideoProps) => {
  const { topics = [] } = course;

  return (
    <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
      {topics.map((topic) => (
        <CourseAccordionItem key={topic._id} topic={topic} />
      ))}
    </Accordion>
  );
};
