/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { prototyping, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface PrototypingProps {
  projectType: Exclude<ProjectType, 'aura'>;
}

export default function Prototyping({ projectType }: PrototypingProps) {
  const project = prototyping[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'nintendo') {
    return (
      <>
        <BorderedCard>
          <section className={styles.caseStudy}>
            <h2 className={styles.h2}>Prototype and Testing</h2>
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.threeImgContainer}>
              <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                  <button
                    className={styles.img}
                    type="button"
                    onClick={() => {
                      openLightbox(project.fullImgPrototype);
                    }}
                  >
                    <img
                      src={project.imgPrototype}
                      alt=""
                    />
                  </button>
                </div>
                <p className={styles.imgLabel}>Prototype</p>
              </div>
              <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                  <button
                    className={styles.img}
                    type="button"
                    onClick={() => {
                      openLightbox(project.fullImgTesting);
                    }}
                  >
                    <img
                      src={project.imgTesting}
                      alt=""
                    />
                  </button>
                </div>
                <p className={styles.imgLabel}>Testing</p>
              </div>
            </div>
          </section>
        </BorderedCard>
        {Lightbox}
      </>
    );
  }

  if (projectType === 'carnival') {
    return (
      <>
        <BorderedCard>
          <section className={styles.caseStudy}>
            <h2 className={styles.h2}>Prototype</h2>
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.singleImgBorder}>
              <button
                className={styles.singleImg}
                type="button"
                onClick={() => {
                  openLightbox(project.fullImgPrototype);
                }}
              >
                <img
                  src={project.imgPrototype}
                  alt=""
                />
              </button>
            </div>
            <p className={styles.imgLabel}>Prototype</p>
          </section>
        </BorderedCard>
        {Lightbox}
      </>
    );
  }

  return null;
}
