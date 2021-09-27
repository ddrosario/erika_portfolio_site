/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { responsive, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface ResponsiveProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'aura'>;
}

export default function Responsive({ projectType }: ResponsiveProps) {
  const project = responsive[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'carnival') {
    return (
      <>
        <BorderedCard>
          <section className={styles.caseStudy}>
            <h2 className={styles.h2}>Feature Roadmap</h2>
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.singleImgContainer}>
              <div className={styles.singleImgBorder}>
                <button
                  className={styles.singleImg}
                  type="button"
                  onClick={() => {
                    openLightbox(project.fullImg);
                  }}
                >
                  <img
                    src={project.img}
                    alt=""
                  />
                </button>
              </div>
              <p className={styles.imgLabel}>Wireframes</p>
            </div>
          </section>
        </BorderedCard>
        {Lightbox}
      </>
    );
  }
  return null;
}
