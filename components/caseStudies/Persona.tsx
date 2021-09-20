/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { persona, ProjectType } from 'data/projectData';

interface PersonaProps {
  projectType: ProjectType;
}

export default function Persona({ projectType }: PersonaProps) {
  const project = persona[projectType];

  if (projectType === 'carnival' || projectType === 'nintendo') {
    return (
      <BorderedCard>
        <h2 className={styles.h2}>Persona</h2>
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.threeImgContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgPersona1}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Persona 1</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgPersona2}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Persona 2</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <div className={styles.img}>
                <img
                  src={project.imgPersona3}
                  alt=""
                />
              </div>
            </div>
            <p className={styles.imgLabel}>Goals</p>
          </div>
        </div>
      </BorderedCard>
    );
  }

  return (
    <BorderedCard>
      <h2 className={styles.h2}>Persona Planning and Persona</h2>
      <p className={styles.projectText}>{project.text}</p>
      <div className={styles.threeImgContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.imgBorder}>
            <div className={styles.img}>
              <img
                src={project.imgPersona1}
                alt=""
              />
            </div>
          </div>
          <p className={styles.imgLabel}>Persona Planning</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgBorder}>
            <div className={styles.img}>
              <img
                src={project.imgPersona2}
                alt=""
              />
            </div>
          </div>
          <p className={styles.imgLabel}>Persona</p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgBorder}>
            <div className={styles.img}>
              <img
                src={project.imgPersona3}
                alt=""
              />
            </div>
          </div>
          <p className={styles.imgLabel}>Goals</p>
        </div>
      </div>
    </BorderedCard>
  );
}
