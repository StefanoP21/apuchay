import { api } from '../../api';
import type { Project } from '..';

export const getProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await api.get<{ ok: boolean; projects: Project[] }>(
      '/api/projects'
    );

    if (typeof data !== 'object') {
      throw new Error('Invalid data type');
    }

    return data.projects;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProjectById = async (id: number): Promise<Project> => {
  try {
    const { data } = await api.get<{ ok: boolean; project: Project }>(
      `/api/projects/${id}`
    );

    if (typeof data !== 'object') {
      throw new Error('Invalid data type');
    }

    return data.project;
  } catch (error) {
    console.error(error);
    return {} as Project;
  }
};
