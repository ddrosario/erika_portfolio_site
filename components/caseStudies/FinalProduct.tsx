/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { finalProduct, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface FinalProductProps {
  projectType: ProjectType;
}

export default function FinalProduct({ projectType }: FinalProductProps) {
  const [Lightbox, openLightbox] = useLightbox();
  return (
    <>
      <BorderedCard>
        <h2 className={styles.h2}>Final Product!</h2>
        <p className={styles.projectText}>{finalProduct[projectType].text}</p>
        <div className={styles.singleImgBorder}>
          <button
            className={styles.singleImg}
            onClick={() => {
              openLightbox(finalProduct[projectType].fullImg);
            }}
            type="button"
          >
            <img
              src={finalProduct[projectType].img}
              alt=""
            />
          </button>
        </div>
      </BorderedCard>
      {Lightbox}
    </>
  );
}
