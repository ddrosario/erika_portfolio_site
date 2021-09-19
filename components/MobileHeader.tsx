import React from 'react';

import styles from '@styles/header/MobileHeader.module.scss';

import useRefClickListener from '@util/hooks/useRefClickListener';
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
      <div className={styles.watermark}>Eri</div>
      <nav className={styles.nav} ref={navRef}>
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
      </nav>
    </header>
  );
};

export default MobileHeader;
