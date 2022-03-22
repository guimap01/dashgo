import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FullPage } from 'components';
import { Input } from 'components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';

type UserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(12, 'No mínimo 12 caracteres'),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas não coincidem'),
});

const CreateUser = () => {
  const { push } = useRouter();

  const handleRedirect = () => {
    push('/users');
  };

  const { mutateAsync } = useMutation(
    async (user: UserFormData) => {
      await api.post('/users', {
        ...user,
        created_at: new Date().toISOString(),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
        handleRedirect();
      },
      onError: () => {
        toast.error('Ocorreu um erro, por favor tente mais tarde.');
      },
    }
  );
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<UserFormData> = async (data) => {
    await mutateAsync(data);
  };

  return (
    <FullPage>
      <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
        <Heading size="lg" fontWeight="normal">
          Criar Usuário
        </Heading>
        <Divider my="6" borderColor="gray.700" />

        <Box
          as="form"
          //@ts-ignore
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Stack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                label="Nome completo"
                {...register('name')}
                errors={formState.errors}
              />
              <Input
                type="email"
                label="E-mail"
                {...register('email')}
                errors={formState.errors}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="password"
                label="Senha"
                errors={formState.errors}
                {...register('password')}
              />
              <Input
                type="password"
                label="Confirme sua senha"
                {...register('passwordConfirmation')}
                errors={formState.errors}
              />
            </SimpleGrid>
          </Stack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button
                disabled={formState.isSubmitting}
                colorScheme="whiteAlpha"
                onClick={handleRedirect}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </FullPage>
  );
};

export default CreateUser;
