import { useQuery } from 'react-query';
import { api } from 'services/api';

type UserType = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersResponse = {
  users: UserType[];
  total: number;
};

const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data } = await api.get<{
    users: { models: UserType[] };
    total: number;
  }>(`/users?page=${page}`);
  const users = data.users.models.map((user: UserType) => ({
    ...user,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));
  return { users, total: data.total };
};

export const useListUsers = (page: number) =>
  useQuery(['users', page], async () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
    keepPreviousData: true,
  });
