import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Api, UserBody, ContentType, UserFullBody } from '../generated/api';

enum QUERY_KEYS {
  USER_CREATE = 'userCreate',
  USER_LIST = 'userList',
  USER_REMOVE = 'userDelete',
  USER_UPDATE = 'userUpdate',
  USER_WHOAMI = 'whoami',
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
export const useRemoveUser = () => {
  const queryClient = useQueryClient();

  return useMutation(QUERY_KEYS.USER_REMOVE, async (id: string) => {
    const result = await api.user.userDelete(id, {
      type: ContentType.Json,
    });
    queryClient.invalidateQueries(QUERY_KEYS.USER_LIST);
    return result;
  });
};
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(QUERY_KEYS.USER_UPDATE, async (user: UserFullBody) => {
    const { id, ...userBody } = user;

    const result = await api.user.userUpdate(id, userBody, {
      type: ContentType.Json,
    });
    queryClient.invalidateQueries(QUERY_KEYS.USER_LIST);
    return result;
  });
};

export const useWhoami = () =>
  useQuery(QUERY_KEYS.USER_WHOAMI, () => api.user.userDetail('whoami'));
