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
import { InfoIcon } from '@chakra-ui/icons';

interface ProjectCardProps {
  project: any;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { infobrasCode, imageUrl, name, entity, amount } = project;

  return (
    <Card w={['xs', 'sm']} key={infobrasCode} borderRadius="3xl">
      <CardBody>
        <Image
          src={imageUrl}
          alt={entity}
          borderRadius="xl"
          w="sm"
          loading="lazy"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{entity}</Heading>
          <Text fontSize="small" textAlign="justify">
            {name}
          </Text>
          <Text fontSize="2xl" fontWeight={600}>
            S/. {amount}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link to={'/'} key={infobrasCode}>
          <Button rightIcon={<InfoIcon />} variant="outline" colorScheme="red">
            Más información
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
