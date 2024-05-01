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

interface LearnCardProps {
  course: any;
}

export const LearnCard = ({ course }: LearnCardProps) => {
  const { courseCod, imageUrl, title, description } = course;
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Card w={['xs', 'sm']} key={courseCod} borderRadius="3xl">
      <CardBody>
        <Image src={imageUrl} alt={title} borderRadius="xl" w="sm" />
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign="center" textTransform="uppercase">
            {title}
          </Heading>
          <Text fontSize="small" textAlign="justify">
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <Link to={isRegistered ? `/learn/${courseCod}` : '#'} key={courseCod}>
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
