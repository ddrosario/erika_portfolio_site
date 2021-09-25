/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { research, ProjectType } from 'data/projectData';

interface ResearchProps {
  projectType: ProjectType;
}

export default function Research({ projectType }: ResearchProps) {
  const project = research[projectType];
  return (
    <BorderedCard>
      <h2 className={styles.h2}>Research</h2>
      <p className={styles.projectText}>{project.text}</p>
      <div className={styles.threeImgContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.imgBorder}>
            <div className={styles.img}>
              <img
                src={project.imgBrief}
                alt=""
              />
            </div>
          </div>
          <p className={styles.imgLabel}>Brief</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgBorder}>
            <div className={styles.img}>
              <img
                src={project.imgTimeline}
                alt=""
              />
            </div>
          </div>
          <p className={styles.imgLabel}>Timeline</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgBorder}>
            <div className={styles.img}>
              <img
                src={project.imgComp}
                alt=""
              />
            </div>
          </div>
          <p className={styles.imgLabel}>
            Competitor
            <br />
            Research
          </p>
        </div>
      </div>
    </BorderedCard>
  );
}
