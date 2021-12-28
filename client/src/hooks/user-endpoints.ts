import { useQuery } from 'react-query';
import { Api } from '../generated/api';

const api = new Api();

export const useFetchUserList = () =>
  useQuery('userList', () => api.user.userList());
