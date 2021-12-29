import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Api, UserBody, ContentType } from '../generated/api';

enum QUERY_KEYS {
  USER_LIST = 'userList',
  USER_CREATE = 'userCreate',
}

const api = new Api();

export const useFetchUserList = () =>
  useQuery(QUERY_KEYS.USER_LIST, () => api.user.userList());

export const useCreateNewUser = () => {
  const queryClient = useQueryClient();

  return useMutation(QUERY_KEYS.USER_CREATE, async (user: UserBody) => {
    const result = await api.user.userCreate(user, { type: ContentType.Json });
    queryClient.invalidateQueries(QUERY_KEYS.USER_LIST);
    return result;
  });
};
