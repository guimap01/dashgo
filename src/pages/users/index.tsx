import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
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
import { useListUsers } from 'hooks/users/listUsers';
import Link from 'next/link';
import { useState } from 'react';
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import { UserType } from 'services/mirage';

const UsersList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useListUsers(page);
  const isLarge = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <FullPage>
      <Box flex="1" borderRadius={8} bg="gray.800" p="8" overflow="auto">
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            Usuários{' '}
            {isFetching && !isLoading && (
              <Spinner size="xs" color="gray.500" ml="1" />
            )}
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
        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify="center">
            <Text>Falha ao obter dados dos usuários</Text>
          </Flex>
        ) : (
          <>
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
                {data?.users?.map(
                  ({ name, email, id, created_at }: UserType) => (
                    <Tr key={id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{name}</Text>
                          <Text fontSize="small" color="gray.300">
                            {email}
                          </Text>
                        </Box>
                      </Td>
                      {isLarge && <Td>{created_at}</Td>}
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
                  )
                )}
              </Tbody>
            </Table>
            <Pagination
              totalCount={data?.total || 0}
              currentPage={page}
              onPageChange={setPage}
              isLoading={isLoading || isFetching}
            />
          </>
        )}
      </Box>
    </FullPage>
  );
};

export default UsersList;
