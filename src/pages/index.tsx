import { Button, Flex, Stack } from '@chakra-ui/react';
import { Inputs } from 'components/Form/Inputs';
import type { NextPage } from 'next';

const SignIn: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        flexDirection="column"
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Inputs name="email" label="E-mail" type="email" />

          <Inputs name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
