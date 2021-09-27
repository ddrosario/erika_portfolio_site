/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { moodBoard, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface ProjectMoodboardProps {
  projectType: Exclude<ProjectType, 'nintendo'>;
}

export default function MoodBoard({ projectType }: ProjectMoodboardProps) {
  const [Lightbox, openLightbox] = useLightbox();
  return (
    <>
      <BorderedCard>
        <section className={styles.caseStudy}>
          <h2 className={styles.h2}>Mood Board</h2>
          <p className={styles.projectText}>{moodBoard[projectType].text}</p>
          <div className={styles.singleImgBorder}>
            <button
              className={styles.singleImg}
              type="button"
              onClick={() => {
                openLightbox(moodBoard[projectType].fullImg);
              }}
            >
              <img
                src={moodBoard[projectType].img}
                alt=""
              />
            </button>
          </div>
        </section>
      </BorderedCard>
      {Lightbox}
    </>
  );
}
