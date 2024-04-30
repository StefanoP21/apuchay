import { Link } from 'react-router-dom';

import { Container, Heading, Button } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { ProjectByIdCard, ProjectTable } from '..';

export const ProjectByIdPage = () => {
  return (
    <Container maxWidth="8xl" padding={10}>
      <Link to="/projects">
        <Button
          leftIcon={<ArrowLeftIcon />}
          colorScheme="gray"
          size="md"
          variant="outline"
          marginBottom={5}
        >
          Regresar
        </Button>
      </Link>
      <Heading size="lg" marginBottom={10} color="red.600">
        Información de la Obra
      </Heading>
      <ProjectByIdCard project={[]} />
      <ProjectTable project={[]} />
    </Container>
  );
};
