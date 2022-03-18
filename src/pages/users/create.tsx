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
import { Header, Sidebar } from 'components';
import { Input } from 'components/Form';

const CreateUser = () => {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <Box as="form">
            <Stack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="name" label="Nome completo" />
                <Input name="email" type="email" label="E-mail" />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="password" type="password" label="Senha" />
                <Input
                  name="passwordConfirmation"
                  type="password"
                  label="Confirme sua senha"
                />
              </SimpleGrid>
            </Stack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                <Button colorScheme="pink">Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
