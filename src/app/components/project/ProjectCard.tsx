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

import { Project } from '../..';

interface ProjectCardProps {
  project: Project;
  prefetchProject: (id: string) => void;
}

export const ProjectCard = ({ project, prefetchProject }: ProjectCardProps) => {
  const { infobrasCode, imageUrl, name, entity, amount } = project;

  return (
    <Card w={['xs', 'sm']} borderRadius="3xl">
      <CardBody>
        <Image
          src={imageUrl}
          alt="obra"
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
        <Link
          to={`/projects/${infobrasCode}`}
          onMouseEnter={() => prefetchProject(infobrasCode)}
        >
          <Button rightIcon={<InfoIcon />} variant="outline" colorScheme="red">
            Más información
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
