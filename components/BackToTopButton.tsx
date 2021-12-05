import React from 'react';
import Image from 'next/image';

import UpArrow from '@assets/up-arrow.png';
import UpArrowPink from '@assets/up-arrow-pink.png';
import styles from '@styles/BackToTopButton.module.scss';

interface BackToTopButtonProps {
  isVisible: boolean;
}

const BackToTopButton = ({ isVisible }: BackToTopButtonProps) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div className={styles.root}>
      <button
        ref={buttonRef}
        className={`${styles.backToTop} ${isVisible ? styles.visible : styles.notVisible}`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          buttonRef.current?.blur();
        }}
        tabIndex={-1}
        type="button"
      >
        <div className={styles.icon}>
          <div className={styles.iconImg}>
            <Image src={UpArrow} alt="" width={30} height={30} />
          </div>
          <div className={styles.iconImgActive}>
            <Image src={UpArrowPink} alt="" width={30} height={30} />
          </div>
        </div>
        <div className={styles.noMobile}>
          Back To
        </div>
        <div className={styles.noMobile}>
          Top
        </div>
      </button>
    </div>
  );
};

export default BackToTopButton;
