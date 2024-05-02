import { Container, Heading } from '@chakra-ui/react';
import { CourseList, useCourses } from '..';

export const CoursePage = () => {
  const { courses } = useCourses();

  return (
    <Container maxWidth="8xl" padding={10}>
      <Heading
        size="xl"
        marginBottom={10}
        color="red.600"
        textAlign="center"
        textTransform="uppercase"
      >
        ¡Capacítate con nosotros!
      </Heading>
      <CourseList courses={courses} />
    </Container>
  );
};
