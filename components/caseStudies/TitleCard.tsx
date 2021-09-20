import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { title, ProjectType } from 'data/projectData';

interface TitleCardProps {
  projectType: ProjectType;
}

export default function TitleCard({ projectType }: TitleCardProps) {
  return (
    <BorderedCard>
      <h1 className={styles.h1}>{title[projectType].title}</h1>
      <p className={styles.titleSubtext}>{title[projectType].subtext}</p>
    </BorderedCard>
  );
}
