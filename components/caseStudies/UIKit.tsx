/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { uiKit, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface UIKitProps {
  projectType: ProjectType;
}

export default function UIKit({ projectType }: UIKitProps) {
  const [Lightbox, openLightbox] = useLightbox();
  return (
    <>
      <BorderedCard>
        <h2 className={styles.h2}>UI Kit</h2>
        <p className={styles.projectText}>{uiKit[projectType].text}</p>
        <div className={styles.singleImgBorder}>
          <button
            className={styles.singleImg}
            type="button"
            onClick={() => {
              openLightbox(uiKit[projectType].fullImg);
            }}
          >
            <img
              src={uiKit[projectType].img}
              alt=""
            />
          </button>
        </div>
      </BorderedCard>
      {Lightbox}
    </>
  );
}
