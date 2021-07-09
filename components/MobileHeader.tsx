import React from 'react';
import styles from '../styles/header/MobileHeader.module.scss';

const MobileHeader = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.watermark}>Eri</div>
      <div>
        <button
          className={styles.hamburgerMenu}
          type="button"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          hamburger menu go here
        </button>
        {showDropdown && (
          <div>dropdown go here</div>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
