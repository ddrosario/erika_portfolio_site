/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/EgProject.module.scss';
import BorderedCard from '../hoc/BorderedCard';
import BoxedLink from '../hoc/BoxedLink';

const AuraCard = () => (
  <BorderedCard>
    <article className={styles.egProject}>
      <div className={styles.projectImgContainer}>
        <div className={styles.projectImg}>
          <img
            src="/assets/projects/aura/overview.png"
            alt="example phone app calendar"
          />
        </div>
      </div>
      <div className={styles.projectTextContainer}>
        <div className={styles.auraHeader}>
          <div className={styles.projectTitle}>
            Aura
          </div>
          <p className={styles.projectDescription}>
            A Mood-Tracking App
          </p>
        </div>
        <div className={styles.boxedLinkWrapper}>
          <BoxedLink
            href="/projects/aura"
            linkText="View Case Study"
          />
        </div>
      </div>
      <div className={styles.projectImgContainer}>
        <div className={styles.projectImg}>
          <img
            src="/assets/projects/aura/overview2.png"
            alt="example phone app home screen"
          />
        </div>
      </div>
    </article>
  </BorderedCard>
);

export default AuraCard;
