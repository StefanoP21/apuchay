export { AppLayout } from './layout/AppLayout';

export { hero, goal } from './lib/data';

export { HomePage } from './pages/HomePage';
export { ProjectsPage } from './pages/ProjectsPage';
export { ProjectByIdPage } from './pages/ProjectByIdPage';
export { CoursePage } from './pages/CoursePage';
export { CourseByIdPage } from './pages/CourseByIdPage';

export { HomeCard } from './components/home/HomeCard';

export { ProjectSelect } from './components/project/ProjectSelect';
export { ProjectList } from './components/project/ProjectList';
export { ProjectCard } from './components/project/ProjectCard';

export { ProjectByIdCard } from './components/projectById/ProjectByIdCard';
export { ProjectTable } from './components/projectById/ProjectTable';

export { CourseList } from './components/course/CourseList';
export { CourseCard } from './components/course/CourseCard';

export type { Project } from './interfaces/project';
export type { Course } from './interfaces/course';

export * as projectActions from './services/projectActions';
export * as courseActions from './services/courseActions';

export { useProjects } from './hooks/useProjects';
export { useProject } from './hooks/useProject';
export { usePrefetchProject } from './hooks/usePrefetchProject';

export { useCourses } from './hooks/useCourses';
