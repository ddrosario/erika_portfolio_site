/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import styles from '@styles/LinkTile.module.scss';

interface LinkTileProps {
  href: string;
  backgroundImgUrl: string;
  text: string;
}

const LinkTile = ({ text, href, backgroundImgUrl }: LinkTileProps) => {
  const [isActive, setIsActive] = React.useState(false);

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
          <span>
            {text}
          </span>
        </a>
      </Link>
      <div className={isActive ? `${styles.img} ${styles.active}` : styles.img}>
        <img
          className={isActive ? styles.active : ''}
          src={backgroundImgUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default LinkTile;
