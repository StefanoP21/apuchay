import { api } from '../../api';
import type { Course } from '..';

export const getCourses = async (): Promise<Course[]> => {
  try {
    const { data } = await api.get<{ ok: boolean; courses: Course[] }>(
      '/api/courses'
    );

    if (typeof data !== 'object') {
      throw new Error('Invalid data type');
    }

    return data.courses;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCourseById = async (id: string): Promise<Course> => {
  try {
    const { data } = await api.get<{ ok: boolean; course: Course }>(
      `/api/courses/${id}`
    );

    if (typeof data !== 'object') {
      throw new Error('Invalid data type');
    }

    return data.course;
  } catch (error) {
    console.error(error);
    return {} as Course;
  }
};
