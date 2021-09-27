/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { planning, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface PlanningProps {
  projectType: ProjectType;
}

export default function Planning({ projectType }: PlanningProps) {
  const project = planning[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  return (
    <>
      <BorderedCard>
        {projectType === 'carnival' ? (
          <h2 className={styles.h2}>Planning Out The Site</h2>
        ) : (
          <h2 className={styles.h2}>Planning Out The App</h2>
        )}
        <p className={styles.projectText}>{project.text}</p>
        <div className={styles.threeImgContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                type="button"
                onClick={() => {
                  openLightbox(project.fullImgSitemap);
                }}
              >
                <img
                  src={project.imgSitemap}
                  alt=""
                />
              </button>
            </div>
            <p className={styles.imgLabel}>Sitemap</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                type="button"
                onClick={() => {
                  openLightbox(project.fullImgUserFlow);
                }}
              >
                <img
                  src={project.imgUserFlow}
                  alt=""
                />
              </button>
            </div>
            <p className={styles.imgLabel}>User Flow</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                type="button"
                onClick={() => {
                  openLightbox(project.fullImgTaskFlow);
                }}
              >
                <img
                  src={project.imgTaskFlow}
                  alt=""
                />
              </button>
            </div>
            <p className={styles.imgLabel}>Task Flow</p>
          </div>
        </div>
      </BorderedCard>
      {Lightbox}
    </>
  );
}
