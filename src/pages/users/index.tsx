import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Header, Pagination, Sidebar } from 'components';
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

const UsersList = () => {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Guimarães</Text>
                    <Text fontSize="small" color="gray.300">
                      pedromonteirogui@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>16 de Março 2022</Td>
                <Td>
                  <Flex gap="1">
                    <Button
                      as="a"
                      size="xs"
                      fontSize="sm"
                      colorScheme="purple"
                      cursor="pointer"
                    >
                      <Icon as={RiPencilLine} />
                    </Button>
                    <Button
                      as="a"
                      size="xs"
                      fontSize="sm"
                      colorScheme="red"
                      cursor="pointer"
                    >
                      <Icon as={RiDeleteBinLine} />
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UsersList;
