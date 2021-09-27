/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { wireframes, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface WireframesProps {
  projectType: ProjectType;
}

export default function Wireframes({ projectType }: WireframesProps) {
  const [Lightbox, openLightbox] = useLightbox();
  return (
    <>
      <BorderedCard>
        <h2 className={styles.h2}>Wireframes</h2>
        <p className={styles.projectText}>{wireframes[projectType].text}</p>
        <div className={styles.singleImgBorder}>
          <button
            className={styles.singleImg}
            type="button"
            onClick={() => {
              openLightbox(wireframes[projectType].fullImg);
            }}
          >
            <img
              src={wireframes[projectType].img}
              alt=""
            />
          </button>
        </div>
      </BorderedCard>
      {Lightbox}
    </>
  );
}
