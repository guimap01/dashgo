import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Pedro Guimarães</Text>
        <Text color="gray.300" fontSize="small">
          pedromonteirogui@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Pedro Guimarães"
        src="https://github.com/guimap01.png"
      />
    </Flex>
  );
};
