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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FullPage } from 'components';
import { Input } from 'components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

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
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<UserFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  const handleCancel = () => {
    push('/users');
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
                onClick={handleCancel}
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
