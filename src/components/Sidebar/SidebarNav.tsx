import { Stack } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink href="/dashboard" text="Dashboard" icon={RiDashboardLine} />
        <NavLink href="/users" text="Usuários" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="Automação">
        <NavLink href="/forms" text="Formulários" icon={RiInputMethodLine} />
        <NavLink href="/automation" text="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
};
