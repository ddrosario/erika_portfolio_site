/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { prototyping, ProjectType } from 'data/projectData';

interface PrototypingProps {
  projectType: Exclude<ProjectType, 'aura'>;
}

export default function Prototyping({ projectType }: PrototypingProps) {
  const project = prototyping[projectType];

  if (projectType === 'nintendo') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Prototype and Testing</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.threeImgContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgPrototype}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Prototype</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgTesting}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Testing</p>
          </div>
        </div>
      </BorderedCard>
    );
  }

  if (projectType === 'carnival') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Prototype</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.singleImgBorder}>
          <div className={styles.singleImg}>
            <img
              src={project.imgPrototype}
              alt=""
            />
          </div>
        </div>
        <p className={styles.imgLabel}>Prototype</p>
      </BorderedCard>
    );
  }

  return null;
}
