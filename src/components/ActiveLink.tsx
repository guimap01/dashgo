import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  let isActive = false;
  if (asPath.includes(rest.href.toString())) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
};
