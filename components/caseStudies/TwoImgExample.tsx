/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import useLightbox from '@util/hooks/useLightbox';

interface TwoImgExampleProps {
  header: string;
  text: string;
  img1: string;
  img2: string;
  label1?: string | null;
  label2?: string | null;
  fullImg1: string;
  fullImg2: string;
  alt1?: string;
  alt2?: string;
}

export default function TwoImgExample({
  header,
  text,
  img1,
  img2,
  label1 = null,
  label2 = null,
  fullImg1,
  fullImg2,
  alt1 = '',
  alt2 = '',
}: TwoImgExampleProps) {
  const [Lightbox, openLightbox] = useLightbox();
  return (
    <>
      <BorderedCard>
        <section className={styles.caseStudy}>
          <h2 className={styles.h2}>{header}</h2>
          <p className={styles.projectText}>{text}</p>
          <div className={styles.threeImgContainer}>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                onClick={() => {
                  openLightbox(fullImg1);
                }}
                type="button"
              >
                <img
                  src={img1}
                  alt={alt1}
                />
              </button>
              {label1 && (
              <p className={styles.imgLabel}>
                {label1}
              </p>
              )}
            </div>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                onClick={() => {
                  openLightbox(fullImg2);
                }}
                type="button"
              >
                <img
                  src={img2}
                  alt={alt2}
                />
              </button>
              {label2 && (
              <p className={styles.imgLabel}>
                {label2}
              </p>
              )}
            </div>
          </div>
        </section>
      </BorderedCard>
      {Lightbox}
    </>
  );
}

TwoImgExample.defaultProps = {
  label1: null,
  label2: null,
  alt1: '',
  alt2: '',
};
