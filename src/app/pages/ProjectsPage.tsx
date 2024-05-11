import { useEffect } from 'react';

import { Container, Heading } from '@chakra-ui/react';

import { ProjectList, ProjectSkeleton, useProjects } from '..';

export const ProjectsPage = () => {
  const { isLoading, projects } = useProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="8xl" padding={10}>
      <Heading size="lg" marginBottom={10} color="red.600">
        Obras para la Reconstrucción con Cambios 2023
      </Heading>
      {isLoading ? <ProjectSkeleton /> : <ProjectList projects={projects} />}
    </Container>
  );
};
