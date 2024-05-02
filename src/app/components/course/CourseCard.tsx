import { useState } from 'react';
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

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const { courseCode, imageUrl, name, description } = course;
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <Card w={['xs', 'sm']} key={courseCode} borderRadius="3xl">
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
        <Link
          to={isRegistered ? `/courses/${courseCode}` : '#'}
          key={courseCode}
        >
          <Button
            leftIcon={isRegistered ? <CheckCircleIcon /> : <InfoIcon />}
            colorScheme={isRegistered ? 'green' : 'red'}
            size="md"
            variant="solid"
            onClick={() => {}}
          >
            {isRegistered ? 'Ver curso' : 'Registrarse para ver curso'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
