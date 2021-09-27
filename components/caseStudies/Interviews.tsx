/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { interview, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface InterviewsProps {
  projectType: ProjectType;
}

export default function Interviews({ projectType }: InterviewsProps) {
  const project = interview[projectType];
  const [Lightbox, openLightbox] = useLightbox();
  return (
    <>
      <BorderedCard>
        <section className={styles.caseStudy}>
          <h2 className={styles.h2}>Interview Guide and Interviews</h2>
          <p className={styles.projectText}>{project.text}</p>
          <div className={styles.threeImgContainer}>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                onClick={() => {
                  openLightbox(project.fullImgDebrief);
                }}
                type="button"
              >
                <img
                  src={project.imgDebrief}
                  alt=""
                />
              </button>
              <p className={styles.imgLabel}>
                Debrief
              </p>
            </div>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                onClick={() => {
                  openLightbox(project.fullImgMap);
                }}
                type="button"
              >
                <img
                  src={project.imgMap}
                  alt=""
                />
              </button>
              <p className={styles.imgLabel}>
                Affinity
                <br />
                Map
              </p>
            </div>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                onClick={() => {
                  openLightbox(project.fullImgInterview);
                }}
                type="button"
              >
                <img
                  src={project.imgInterview}
                  alt=""
                />
              </button>
              <p className={styles.imgLabel}>
                Interview
                <br />
                Questions
              </p>
            </div>
          </div>
        </section>
      </BorderedCard>
      {Lightbox}
    </>
  );
}
