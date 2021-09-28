/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import useLightbox from '@util/hooks/useLightbox';

interface TwoImgExampleProps {
  header: string;
  text: string;
  img1: string;
  label1?: string | null;
  fullImg1: string;
  alt1?: string;
}

export default function TwoImgExample({
  header,
  text,
  img1,
  label1 = null,
  fullImg1,
  alt1 = '',
}: TwoImgExampleProps) {
  const [Lightbox, openLightbox] = useLightbox();
  return (
    <>
      <BorderedCard>
        <section className={styles.caseStudy}>
          <h2 className={styles.h2}>{header}</h2>
          <p className={styles.projectText}>{text}</p>
          <div className={styles.singleImgContainer}>
            <div className={styles.singleImgBorder}>
              <button
                className={styles.singleImg}
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
            </div>
            {label1 && (
            <p className={styles.imgLabel}>
              {label1}
            </p>
            )}
          </div>
        </section>
      </BorderedCard>
      {Lightbox}
    </>
  );
}

TwoImgExample.defaultProps = {
  label1: null,
  alt1: '',
};
