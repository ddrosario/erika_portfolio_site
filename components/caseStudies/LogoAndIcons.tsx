/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { logoAndIcons, ProjectType } from 'data/projectData';

interface LogoAndIconsProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'carnival'>;
}

export default function LogoAndIcons({ projectType }: LogoAndIconsProps) {
  const project = logoAndIcons[projectType];

  if (projectType === 'aura') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Logo and Icons</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.threeImgContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgMoods}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Moods</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgIcons}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Icons</p>
          </div>
        </div>
      </BorderedCard>
    );
  }

  return null;
}
