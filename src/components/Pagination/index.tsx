import { Box, Stack, Text, HStack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCount: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  currentPage?: number;
  isLoading?: boolean;
}

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
};

export const Pagination = ({
  totalCount,
  onPageChange,
  currentPage = 1,
  pageSize = 10,
  isLoading = false,
}: PaginationProps) => {
  const lastPage = Math.ceil(totalCount / pageSize);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  const valueFrom = currentPage * pageSize - 9;
  const valueTo = currentPage * pageSize;

  return (
    <Stack
      mt="8"
      direction={['column', 'row']}
      justify="space-between"
      spacing="6"
      align="center"
    >
      <Box>
        <Text>
          <strong>{valueFrom}</strong> -{' '}
          <strong>{valueTo > totalCount ? totalCount : valueTo}</strong> de{' '}
          <strong>{totalCount}</strong>
        </Text>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem
              isLoading={isLoading}
              onPageChage={onPageChange}
              number={1}
            />
            {currentPage > 2 + siblingsCount && (
              <Text fontSize="small" color="gray.300">
                ...
              </Text>
            )}
          </>
        )}
        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                isLoading={isLoading}
                onPageChage={onPageChange}
                number={page}
                key={page}
              />
            );
          })}
        <PaginationItem
          isLoading={isLoading}
          onPageChage={onPageChange}
          number={currentPage}
          isCurrent
        />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                isLoading={isLoading}
                onPageChage={onPageChange}
                number={page}
                key={page}
              />
            );
          })}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text fontSize="small" color="gray.300">
                ...
              </Text>
            )}
            <PaginationItem
              isLoading={isLoading}
              onPageChage={onPageChange}
              number={lastPage}
            />
          </>
        )}
      </HStack>
    </Stack>
  );
};
