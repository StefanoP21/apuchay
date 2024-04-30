import { SimpleGrid } from '@chakra-ui/react';
import { ProjectCard } from '../';

interface ProjectListProps {
  projects: any[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <SimpleGrid minChildWidth="xs" spacing={10}>
      {projects.map((project) => (
        <ProjectCard key={project.infobrasCode} project={project} />
      ))}
    </SimpleGrid>
  );
};
