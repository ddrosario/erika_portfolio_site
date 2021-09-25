/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { overview, ProjectType } from 'data/projectData';

interface ProjectOverviewProps {
  projectType: ProjectType;
}

export default function ProjectOverview({ projectType }: ProjectOverviewProps) {
  return (
    <BorderedCard>
      <h2 className={styles.h2}>Project Overview</h2>
      <p className={styles.projectText}>{overview[projectType].text}</p>
      <div className={styles.singleImgBorder}>
        <div className={styles.projectImg}>
          <img
            src={overview[projectType].img}
            alt=""
          />
        </div>
      </div>
    </BorderedCard>
  );
}
