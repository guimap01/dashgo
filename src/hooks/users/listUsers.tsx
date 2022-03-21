import { useQuery } from 'react-query';
import { api } from 'services/api';
import { UserType } from 'services/mirage';

export const useListUsers = () =>
  useQuery(
    'users',
    async () => {
      const { data } = await api.get<{ users: UserType[] }>('/users');

      const users = data.users.map((user: UserType) => ({
        ...user,
        created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      }));
      return users;
    },
    {
      staleTime: 1000 * 5, // 5 seconds
    }
  );
