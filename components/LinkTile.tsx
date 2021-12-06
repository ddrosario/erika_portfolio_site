/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import styles from '@styles/LinkTile.module.scss';

interface LinkTileProps {
  href: string;
  text: string;
}

const LinkTile = ({ text, href }: LinkTileProps) => {
  const [, setIsActive] = React.useState(false);

  const turnActive = () => {
    setIsActive(true);
  };

  const turnInactive = () => {
    setIsActive(false);
  };

  return (
    <div
      className={styles.linkTile}
      onMouseEnter={turnActive}
      onMouseLeave={turnInactive}
    >
      <Link
        href={href}
        passHref
      >
        <a
          href="replace"
          onMouseDown={turnActive}
          onTouchStart={turnActive}
        >
          {text}
        </a>
      </Link>
    </div>
  );
};

export default LinkTile;
