/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { branding, ProjectType } from 'data/projectData';

interface RoadmapProps {
  projectType: Exclude<ProjectType, 'aura'>;
}

export default function Roadmap({ projectType }: RoadmapProps) {
  const project = branding[projectType];

  if (projectType === 'carnival' || projectType === 'nintendo') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Branding</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.singleImgContainer}>
          <div className={styles.singleImgBorder}>
            <div className={styles.singleImg}>
              <img
                src={project.imgBranding}
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
