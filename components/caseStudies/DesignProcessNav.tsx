/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import styles from '@styles/DesignProcessNav.module.scss';

export interface DesignProcessNavItem {
  icon: string;
  iconAlt: string;
  text: string;
  id: string;
}

interface DesignProcessNavProps {
  navItems: DesignProcessNavItem[];
}

const DesignProcessNav = ({ navItems }: DesignProcessNavProps) => {
  // something to prevent format
  const ref = React.useRef();

  return (
    <section>
      <h2 className={styles.header}>The Design Process</h2>
      <div className={styles.navGrid}>
        {navItems.map(({
          icon,
          iconAlt,
          text,
          id,
        }) => (
          <div
            className={styles.linkTile}
            key={id}
          >
            <Link
              href={`#${id}`}
              passHref
            >
              <a
                className={styles.anchor}
                href="replace"
              >
                <div className={id === 'prototype' ? styles.spacer : ''}>
                  <img className={styles.anchorIcon} src={icon} alt={iconAlt} />
                </div>
                <div className={styles.anchorText}>
                  {text}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignProcessNav;
