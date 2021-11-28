import React, { FC, HTMLProps, useCallback } from 'react';
import NextLink, { LinkProps } from 'next/link';

interface FLinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'href' | 'as'>, LinkProps {}

const Link: FC<FLinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ...anchorProps
}: any) => {
  const handleClick = useCallback(
    (e) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    },
    [href],
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        onKeyDown={handleClick}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
