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
  useBreakpointValue,
} from '@chakra-ui/react';
import { FullPage, Pagination } from 'components';
import Link from 'next/link';
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

const UsersList = () => {
  const isLarge = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <FullPage>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8" overflow="auto">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            Usuários
          </Heading>
          <Link href="/users/create" passHref>
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
          </Link>
        </Flex>
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={['4', '4', '6']} color="gray.300" width="8">
                <Checkbox colorScheme="pink" />
              </Th>
              <Th>Usuário</Th>
              {isLarge && <Th>Data de cadastro</Th>}
              <Th w="8" />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={['4', '4', '6']}>
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
              {isLarge && <Td>16 de Março 2022</Td>}
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
    </FullPage>
  );
};

export default UsersList;
