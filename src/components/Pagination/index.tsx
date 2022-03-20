import { Box, Stack, Text, HStack } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export const Pagination = () => {
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
          <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
        </Text>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </Stack>
  );
};
