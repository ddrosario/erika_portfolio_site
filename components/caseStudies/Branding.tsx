/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { branding, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface RoadmapProps {
  projectType: Exclude<ProjectType, 'aura'>;
}

export default function Roadmap({ projectType }: RoadmapProps) {
  const project = branding[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'carnival' || projectType === 'nintendo') {
    return (
      <>
        <BorderedCard>
          <h2 className={styles.h2}>Branding</h2>
          <p className={styles.projectText}>{project.text}</p>
          <div className={styles.singleImgContainer}>
            <div className={styles.singleImgBorder}>
              <button
                className={styles.singleImg}
                onClick={() => {
                  openLightbox(project.fullImgBranding);
                }}
                type="button"
              >
                <img
                  src={project.imgBranding}
                  alt=""
                />
              </button>
            </div>
            <p className={styles.imgLabel}>Wireframes</p>
          </div>
        </BorderedCard>
        {Lightbox}
      </>
    );
  }

  return null;
}
