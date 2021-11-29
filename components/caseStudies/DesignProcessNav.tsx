/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import styles from '@styles/DesignProcessNav.module.scss';

export interface DesignProcessNavItem {
  icon: string;
  iconAlt: string;
  text: string;
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface DesignProcessNavProps {
  navItems: DesignProcessNavItem[];
}

const DesignProcessNav = ({ navItems }: DesignProcessNavProps) => (
  <section>
    <h2 className={styles.header}>The Design Process</h2>
    <div className={styles.navGrid}>
      {navItems.map(({
        icon,
        iconAlt,
        text,
        id,
        ref,
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
              onClick={(e) => {
                if (ref.current !== null) {
                  e.preventDefault();
                  ref.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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
export default DesignProcessNav;
