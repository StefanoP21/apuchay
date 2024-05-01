import { SimpleGrid } from '@chakra-ui/react';
import { type Project, ProjectCard } from '../..';

interface ProjectListProps {
  projects: Project[];
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
