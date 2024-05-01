import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Heading, Button } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import { ProjectByIdCard, ProjectTable, useProject } from '../';

export const ProjectByIdPage = () => {
  const { id } = useParams();
  const { project } = useProject({ id: id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <ProjectByIdCard project={project} />
      <ProjectTable project={project} />
    </Container>
  );
};
