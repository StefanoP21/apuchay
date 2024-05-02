import { SimpleGrid } from '@chakra-ui/react';
import { type Project, ProjectCard, usePrefetchProject } from '../..';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const { prefetchProject } = usePrefetchProject();

  return (
    <SimpleGrid minChildWidth="xs" spacing={10}>
      {projects.map((project) => (
        <ProjectCard
          key={project.infobrasCode}
          project={project}
          prefetchProject={prefetchProject}
        />
      ))}
    </SimpleGrid>
  );
};
