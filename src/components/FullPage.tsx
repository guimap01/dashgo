import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Header, Sidebar } from 'components';

interface FullPageProps {
  children: ReactNode;
}

export const FullPage = ({ children }: FullPageProps) => {
  return (
    <Box w="100%">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        {children}
      </Flex>
    </Box>
  );
};
