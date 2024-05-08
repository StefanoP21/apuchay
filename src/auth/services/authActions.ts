import { AxiosError, AxiosResponse } from 'axios';

import { api } from '../../api';
import { User, UserForm } from '..';

export const signIn = async (user: UserForm): Promise<User> => {
  try {
    const { data } = await api.post<User>('/api/auth/login', {
      email: user.email,
      password: user.password,
    });

    localStorage.setItem('token', data.token);
    localStorage.setItem('token-init-date', new Date().getTime().toString());

    return data;
  } catch (error) {
    const response = (error as AxiosError).response as AxiosResponse<User>;
    const { data } = response;

    throw new Error(data.msg);
  }
};

export const signUp = async (user: UserForm): Promise<User> => {
  try {
    const { data } = await api.post<User>('/api/auth/register', user);

    localStorage.setItem('token', data.token);
    localStorage.setItem('token-init-date', new Date().getTime().toString());

    return data;
  } catch (error) {
    const response = (error as AxiosError).response as AxiosResponse<User>;
    const { data } = response;

    throw new Error(data.msg);
  }
};

export const checkAuth = async (): Promise<User> => {
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    throw new Error('No token found');
  }

  try {
    const { data } = await api.get<User>('/api/auth/renew');

    localStorage.setItem('token', data.token);
    localStorage.setItem('token-init-date', new Date().getTime().toString());

    return data;
  } catch (error) {
    localStorage.clear();
    const response = (error as AxiosError).response as AxiosResponse<User>;
    const { data } = response;

    throw new Error(data.msg);
  }
};
