/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { roadmap, ProjectType } from 'data/projectData';

interface RoadmapProps {
  projectType: ProjectType;
}

export default function Roadmap({ projectType }: RoadmapProps) {
  const project = roadmap[projectType];

  if (projectType === 'carnival') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Feature Roadmap</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.singleImgContainer}>
          <div className={styles.singleImgBorder}>
            <div className={styles.singleImg}>
              <img
                src={project.imgRoadmap}
                alt=""
              />
            </div>
          </div>
        </div>
      </BorderedCard>
    );
  }

  return (
    <BorderedCard>
      <h2 className={styles.h2}>Feature Roadmap and Revisions</h2>
      <p className={styles.projectText}>{project.text}</p>
      <div className={styles.threeImgContainer}>
        <div className={styles.imgBorder}>
          <div className={styles.img}>
            <img
              src={project.imgRoadmap}
              alt=""
            />
          </div>
        </div>
        <div className={styles.imgBorder}>
          <div className={styles.img}>
            <img
              src={project.imgRevised}
              alt=""
            />
          </div>
        </div>
      </div>
    </BorderedCard>
  );
}
