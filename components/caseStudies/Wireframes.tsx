/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { wireframes, ProjectType } from 'data/projectData';

interface WireframesProps {
  projectType: ProjectType;
}

export default function Wireframes({ projectType }: WireframesProps) {
  return (
    <BorderedCard>
      <h2 className={styles.h2}>Wireframes</h2>
      <p className={styles.projectText}>{wireframes[projectType].text}</p>
      <div className={styles.singleImgBorder}>
        <div className={styles.singleImg}>
          <img
            src={wireframes[projectType].img}
            alt=""
          />
        </div>
      </div>
    </BorderedCard>
  );
}
