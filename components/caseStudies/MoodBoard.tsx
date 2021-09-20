/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { moodBoard, ProjectType } from 'data/projectData';

interface ProjectMoodboardProps {
  projectType: Exclude<ProjectType, 'nintendo'>;
}

export default function MoodBoard({ projectType }: ProjectMoodboardProps) {
  return (
    <BorderedCard>
      <h2 className={styles.h2}>Mood Board</h2>
      <p className={styles.projectText}>{moodBoard[projectType].text}</p>
      <div className={styles.singleImgBorder}>
        <div className={styles.singleImg}>
          <img
            src={moodBoard[projectType].img}
            alt=""
          />
        </div>
      </div>
    </BorderedCard>
  );
}
