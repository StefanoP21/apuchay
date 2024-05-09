import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react';
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';

import type { Course } from '../..';
import { useCheckAuth } from '../../../auth';

interface CourseCardProps {
  course: Course;
  prefetchCourse: (id: number) => void;
}

export const CourseCard = ({ course, prefetchCourse }: CourseCardProps) => {
  const { courseCode, imageUrl, name, description } = course;
  const mutation = useCheckAuth();

  useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <Card
      w={['xs', 'sm']}
      borderRadius="3xl"
      onMouseEnter={() => prefetchCourse(courseCode)}
    >
      <CardBody>
        <Image src={imageUrl} alt={name} borderRadius="xl" w="sm" />
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign="center" textTransform="uppercase">
            {name}
          </Heading>
          <Text fontSize="small" textAlign="justify">
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <Link to={mutation.isSuccess ? `/courses/${courseCode}` : `/auth`}>
          <Button
            leftIcon={mutation.isSuccess ? <CheckCircleIcon /> : <InfoIcon />}
            colorScheme={mutation.isSuccess ? 'green' : 'red'}
            size="md"
            variant="solid"
          >
            {mutation.isSuccess ? 'Ver curso' : 'Registrarse para ver curso'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
