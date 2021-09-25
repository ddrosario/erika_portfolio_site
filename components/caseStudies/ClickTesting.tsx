/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { clickTesting, ProjectType } from 'data/projectData';

interface ClickTestingProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'aura'>;
}

export default function ClickTesting({ projectType }: ClickTestingProps) {
  const project = clickTesting[projectType];

  if (projectType === 'carnival') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Second Round of Testing</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.singleImgContainer}>
          <div className={styles.singleImgBorder}>
            <div className={styles.singleImg}>
              <img
                src={project.img}
                alt=""
              />
            </div>
          </div>
        </div>
      </BorderedCard>
    );
  }
  return null;
}
