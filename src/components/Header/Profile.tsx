import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData ? (
        <Box mr="4" textAlign="right">
          <Text>Pedro Guimarães</Text>
          <Text color="gray.300" fontSize="small">
            pedromonteirogui@gmail.com
          </Text>
        </Box>
      ) : null}
      <Avatar
        size="md"
        name="Pedro Guimarães"
        src="https://github.com/guimap01.png"
      />
    </Flex>
  );
};
