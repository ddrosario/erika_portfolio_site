/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { interview, ProjectType } from 'data/projectData';

interface InterviewsProps {
  projectType: ProjectType;
}

export default function Interviews({ projectType }: InterviewsProps) {
  const project = interview[projectType];
  return (
    <BorderedCard>
      <h2 className={styles.h2}>Interview Guide and Interviews</h2>
      <p className={styles.projectText}>{project.text}</p>
      <div className={styles.threeImgContainer}>
        <div className={styles.imgBorder}>
          <div className={styles.img}>
            <img
              src={project.imgDebrief}
              alt=""
            />
          </div>
        </div>
        <div className={styles.imgBorder}>
          <div className={styles.img}>
            <img
              src={project.imgMap}
              alt=""
            />
          </div>
        </div>
        <div className={styles.imgBorder}>
          <div className={styles.img}>
            <img
              src={project.imgInterview}
              alt=""
            />
          </div>
        </div>
      </div>
    </BorderedCard>
  );
}
