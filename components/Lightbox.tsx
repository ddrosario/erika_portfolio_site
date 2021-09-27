/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import Portal from '@components/hoc/Portal';

import styles from '@styles/Lightbox.module.scss';

interface LightboxProps {
  imgUrl: string;
  handleCloseLightbox: Function | any;
}

const Lightbox = ({ imgUrl, handleCloseLightbox }: LightboxProps) => {
  useEffect(() => {
    const body = document.getElementsByTagName('BODY')[0];
    body.classList.add('modal-open');
    return () => body.classList.remove('modal-open');
  }, []);

  return (
    <Portal id="lightbox-gallery">
      <div className={styles.overlay}>
        <div
          className={styles.screenBounds}
          onClick={handleCloseLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCloseLightbox();
            }
          }}
        >
          <button
            className={styles.closeButton}
            type="button"
            aria-label="close"
            tabIndex={0}
            onClick={handleCloseLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCloseLightbox();
              }
            }}
          >
            <span />
            <span />
          </button>
          <div className={styles.outerBox}>
            <div className={styles.centerLB}>
              <div className={styles.imgContainer}>
                <img
                  className={styles.displayPhoto}
                  src={imgUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Lightbox;
