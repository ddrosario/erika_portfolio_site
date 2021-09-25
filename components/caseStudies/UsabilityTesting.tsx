/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { usabilityTesting, ProjectType } from 'data/projectData';

interface UsabilityTestingProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'carnival'>;
}

export default function UsabilityTesting({ projectType }: UsabilityTestingProps) {
  const project = usabilityTesting[projectType];

  if (projectType === 'aura') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Usability Testing Results</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.threeImgContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgDebrief}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Debrief</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgAffinityMap}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Affinity Map</p>
          </div>
        </div>
      </BorderedCard>
    );
  }

  return null;
}
