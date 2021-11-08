import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/header/MobileHeader.module.scss';

import useRefClickListener from '@util/hooks/useRefClickListener';
import Logo from '@assets/logo.svg';

import MobileNavDropdown from './MobileNavDropdown';

const MobileHeader = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleClose = React.useCallback(() => {
    setShowDropdown(false);
  }, []);

  useRefClickListener(navRef, handleClose);

  return (
    <header className={styles.header}>
      <Link
        href="/"
        passHref
      >
        <a
          className={styles.watermark}
          href="replace"
        >
          <Image
            src={Logo}
            alt="Eri Lambe"
            layout="intrinsic"
          />
        </a>
      </Link>
      <nav className={styles.nav2}>
        <div>About</div>
        <div>Contact</div>
      </nav>
      {/* <nav className={styles.nav} ref={navRef}>
        <button
          className={showDropdown ? `${styles.active} ${styles.hamburgerMenu}` : styles.hamburgerMenu}
          type="button"
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
        >
          <span />
          <span />
          <span />
        </button>
        {showDropdown && (
          <div className={styles.navDropdown} ref={dropdownRef}>
            <MobileNavDropdown />
          </div>
        )}
      </nav> */}
    </header>
  );
};

export default MobileHeader;
