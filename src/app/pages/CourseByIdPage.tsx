import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button, Container, GridItem, SimpleGrid } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { CourseAccordion, CourseVideo, useCourse } from '..';

export const CourseByIdPage = () => {
  const { id } = useParams();
  const { course } = useCourse({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="8xl" padding={10}>
      <Link to={`/courses`}>
        <Button
          leftIcon={<ArrowLeftIcon />}
          colorScheme="gray"
          size="md"
          variant="outline"
          marginBottom={10}
        >
          Regresar
        </Button>
      </Link>
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <GridItem>
          <CourseAccordion course={course} />
        </GridItem>
        <GridItem>
          <CourseVideo course={course} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
