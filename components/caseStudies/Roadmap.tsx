/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BorderedCard from '@components/hoc/BorderedCard';

import styles from '@styles/projects.module.scss';
import { roadmap, ProjectType } from 'data/projectData';
import useLightbox from '@util/hooks/useLightbox';

interface RoadmapProps {
  projectType: ProjectType;
}

export default function Roadmap({ projectType }: RoadmapProps) {
  const project = roadmap[projectType];
  const [Lightbox, openLightbox] = useLightbox();

  if (projectType === 'carnival' || projectType === 'nintendo') {
    return (
      <>
        <BorderedCard>
          <section className={styles.caseStudy}>
            {projectType === 'nintendo' ? (
              <h2 className={styles.h2}>Feature Roadmap and Revisions</h2>
            ) : (
              <h2 className={styles.h2}>Feature Roadmap</h2>
            )}
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.singleImgContainer}>
              <div className={styles.singleImgBorder}>
                <button
                  className={styles.singleImg}
                  type="button"
                  onClick={() => {
                    openLightbox(project.fullImgRoadmap);
                  }}
                >
                  <img
                    src={project.imgRoadmap}
                    alt=""
                  />
                </button>
              </div>
              <p className={styles.imgLabel}>
                Feature
                <br />
                Roadmap
              </p>
            </div>
          </section>
        </BorderedCard>
        {Lightbox}
      </>
    );
  }

  return (
    <>
      <BorderedCard>
        <section className={styles.caseStudy}>
          <h2 className={styles.h2}>Feature Roadmap and Revisions</h2>
          <p className={styles.projectText}>{project.text}</p>
          <div className={styles.threeImgContainer}>
            <div className={styles.imgBorder}>
              <button
                className={styles.img}
                type="button"
                onClick={() => {
                  openLightbox(project.fullImgRoadmap);
                }}
              >
                <img
                  src={project.imgRoadmap}
                  alt=""
                />
              </button>
              <p className={styles.imgLabel}>
                Feature
                <br />
                Roadmap
              </p>
            </div>
            <div className={styles.imgBorder}>
              <button
                type="button"
                className={styles.img}
                onClick={() => {
                  openLightbox(project.fullImgRevised);
                }}
              >
                <img
                  src={project.imgRevised}
                  alt=""
                />
              </button>
              <p className={styles.imgLabel}>
                Feature
                <br />
                Roadmap
              </p>
            </div>
          </div>
        </section>
      </BorderedCard>
      {Lightbox}
    </>
  );
}
