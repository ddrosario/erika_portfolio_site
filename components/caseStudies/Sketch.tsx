/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { sketch, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface SketchProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'carnival'>;
}

export default function Sketch({ projectType }: SketchProps) {
  const project = sketch[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'aura') {
    return (
      <>
        <BorderedCard>
          <section className={styles.caseStudy}>
            <h2 className={styles.h2}>Sketch, Sketch, Sketch!</h2>
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.threeImgContainer}>
              <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                  <button
                    className={styles.img}
                    type="button"
                    onClick={() => {
                      openLightbox(project.fullImg1);
                    }}
                  >
                    <img
                      src={project.img1}
                      alt=""
                    />
                  </button>
                </div>
                <p className={styles.imgLabel}>Sketch 1</p>
              </div>
              <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                  <button
                    className={styles.img}
                    type="button"
                    onClick={() => {
                      openLightbox(project.fullImg2);
                    }}
                  >
                    <img
                      src={project.img2}
                      alt=""
                    />
                  </button>
                </div>
                <p className={styles.imgLabel}>Sketch 2</p>
              </div>
              <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                  <button
                    className={styles.img}
                    type="button"
                    onClick={() => {
                      openLightbox(project.fullImg3);
                    }}
                  >
                    <img
                      src={project.img3}
                      alt=""
                    />
                  </button>
                </div>
                <p className={styles.imgLabel}>Sketch 3</p>
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
