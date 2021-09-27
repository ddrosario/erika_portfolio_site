/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { usabilityTesting, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface UsabilityTestingProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'carnival'>;
}

export default function UsabilityTesting({ projectType }: UsabilityTestingProps) {
  const project = usabilityTesting[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'aura') {
    return (
      <>
        <BorderedCard>
          <h2 className={styles.h2}>Usability Testing Results</h2>
          <p className={styles.projectText}>{project.text}</p>
          <div className={styles.threeImgContainer}>
            <div className={styles.imgContainer}>
              <div className={styles.imgBorder}>
                <button
                  className={styles.img}
                  type="button"
                  onClick={() => {
                    openLightbox(project.fullImgDebrief);
                  }}
                >
                  <img
                    src={project.imgDebrief}
                    alt=""
                  />
                </button>
              </div>
              <p className={styles.imgLabel}>Debrief</p>
            </div>
            <div className={styles.imgContainer}>
              <div className={styles.imgBorder}>
                <button
                  className={styles.img}
                  type="button"
                  onClick={() => {
                    openLightbox(project.fullImgAffinityMap);
                  }}
                >
                  <img
                    src={project.imgAffinityMap}
                    alt=""
                  />
                </button>
              </div>
              <p className={styles.imgLabel}>Affinity Map</p>
            </div>
          </div>
        </BorderedCard>
        {Lightbox}
      </>
    );
  }

  return null;
}
