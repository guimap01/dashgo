import { Box, Stack } from '@chakra-ui/react';

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink text="Dashboard" icon={RiDashboardLine} />
          <NavLink text="Usuários" icon={RiContactsLine} />
        </NavSection>
        <NavSection title="Automação">
          <NavLink text="Formulários" icon={RiInputMethodLine} />
          <NavLink text="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  );
};
