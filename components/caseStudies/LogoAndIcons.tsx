/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { logoAndIcons, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface LogoAndIconsProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'carnival'>;
}

export default function LogoAndIcons({ projectType }: LogoAndIconsProps) {
  const project = logoAndIcons[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'aura') {
    return (
      <>
        <BorderedCard>
          <section className={styles.caseStudy}>
            <h2 className={styles.h2}>Logo and Icons</h2>
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.threeImgContainer}>
              <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                  <button
                    className={styles.img}
                    type="button"
                    onClick={() => {
                      openLightbox(project.fullImgMoods);
                    }}
                  >
                    <img
                      src={project.imgMoods}
                      alt=""
                    />
                  </button>
                </div>
                <p className={styles.imgLabel}>Moods</p>
              </div>
              <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                  <button
                    className={styles.img}
                    type="button"
                    onClick={() => {
                      openLightbox(project.fullImgIcons);
                    }}
                  >
                    <img
                      src={project.imgIcons}
                      alt=""
                    />
                  </button>
                </div>
                <p className={styles.imgLabel}>Icons</p>
              </div>
            </div>
          </section>
        </BorderedCard>
        {Lightbox}
      </>
    );
  }

  return null;
}
