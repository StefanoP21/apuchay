import {
  Container,
  SimpleGrid,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

import { ProjectList, ProjectSelect } from '../';

export const ProjectsPage = () => {
  const handleSearch = () => {
    console.log('Search');
  };

  return (
    <Container maxWidth="8xl" padding={10}>
      <Heading size="lg" marginBottom={10} color="red.600">
        Obras para la Reconstrucción con Cambios 2023
      </Heading>
      <SimpleGrid minChildWidth="xs" spacing={10}>
        <ProjectSelect
          title="Departamento"
          items={[{ id: '15', name: 'Lima' }]}
          onSelect={() => {}}
        />
        <ProjectSelect
          title="Provincia"
          items={[{ id: '1501', name: 'Yauyos' }]}
          onSelect={() => {}}
        />
        <ProjectSelect
          title="Distrito"
          items={[{ id: '150101', name: 'Yauyos' }]}
          onSelect={() => {}}
        />
      </SimpleGrid>
      <Button
        leftIcon={<Search2Icon />}
        colorScheme="red"
        size="md"
        variant="solid"
        marginTop={5}
        onClick={handleSearch}
      >
        Buscar Obras
      </Button>
      <Divider marginY={10} />
      <ProjectList projects={[]} />
    </Container>
  );
};
