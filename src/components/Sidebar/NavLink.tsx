import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface NavLinkProps extends LinkProps {
  icon: IconType;
  text: string;
}

export const NavLink = ({ icon, text, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" alignContent="center" py="1" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {text}
      </Text>
    </Link>
  );
};
