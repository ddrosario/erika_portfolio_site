/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/EgProject.module.scss';
import BorderedCard from '../hoc/BorderedCard';
import BoxedLink from '../hoc/BoxedLink';

const CarnivalCard = () => (
  <BorderedCard>
    <article className={styles.egProject}>
      <div className={styles.projectTextContainer}>
        <div className={styles.auraTitle}>
          <div className={styles.projectTitle}>
            Carnival Cruiseline
          </div>
          <p
            className={`${styles.projectDescription} ${styles.carnivalDesc}`}
          >
            A complete responsive redesign of the Carnival Cruiseline website
          </p>
        </div>
        <div>
          <BoxedLink
            href="/projects/carnival"
            linkText="View Case Study"
          />
          <div className={styles.tabSpacer} />
        </div>
      </div>
      <div className={styles.projectImgContainer}>
        <div className={styles.projectImg}>
          <img
            src="https://picsum.photos/200/200"
            alt=""
          />
        </div>
      </div>
    </article>
  </BorderedCard>
);

export default CarnivalCard;