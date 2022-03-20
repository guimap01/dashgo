import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import { ActiveLink } from 'components/ActiveLink';
import { IconType } from 'react-icons';

interface NavLinkProps extends LinkProps {
  icon: IconType;
  text: string;
  href: string;
}

export const NavLink = ({ href, icon, text, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignContent="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};
