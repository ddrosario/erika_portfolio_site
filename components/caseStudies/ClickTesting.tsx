/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { clickTesting, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface ClickTestingProps {
  projectType: Exclude<ProjectType, 'nintendo' | 'aura'>;
}

export default function ClickTesting({ projectType }: ClickTestingProps) {
  const project = clickTesting[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'carnival') {
    return (
      <>
        <BorderedCard>
          <section className={styles.caseStudy}>
            <h2 className={styles.h2}>Second Round of Testing</h2>
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.singleImgContainer}>
              <div className={styles.singleImgBorder}>
                <button
                  className={styles.singleImg}
                  onClick={() => {
                    openLightbox(project.fullImg);
                  }}
                  type="button"
                >
                  <img
                    src={project.img}
                    alt=""
                  />
                </button>
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
