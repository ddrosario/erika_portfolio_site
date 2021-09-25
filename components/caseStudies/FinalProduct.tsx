/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { finalProduct, ProjectType } from 'data/projectData';

interface FinalProductProps {
  projectType: ProjectType;
}

export default function FinalProduct({ projectType }: FinalProductProps) {
  return (
    <BorderedCard>
      <h2 className={styles.h2}>Final Product!</h2>
      <p className={styles.projectText}>{finalProduct[projectType].text}</p>
      <div className={styles.singleImgBorder}>
        <div className={styles.singleImg}>
          <img
            src={finalProduct[projectType].img}
            alt=""
          />
        </div>
      </div>
    </BorderedCard>
  );
}
