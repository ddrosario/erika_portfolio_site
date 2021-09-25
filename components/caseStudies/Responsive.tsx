/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { responsive, ProjectType } from 'data/projectData';

interface ResponsiveProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'aura'>;
}

export default function Responsive({ projectType }: ResponsiveProps) {
  const project = responsive[projectType];

  if (projectType === 'carnival') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Feature Roadmap</h2>
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
          <p className={styles.imgLabel}>Wireframes</p>
        </div>
      </BorderedCard>
    );
  }
  return null;
}
