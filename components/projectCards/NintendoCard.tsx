/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/EgProject.module.scss';
import BorderedCard from '../hoc/BorderedCard';
import BoxedLink from '../hoc/BoxedLink';

const NintendoCard = () => (
  <BorderedCard>
    <article className={styles.egProject}>
      <div className={styles.projectImgContainer}>
        <div className={styles.projectImg}>
          <img
            src="/assets/projects/nintendo/overview.png"
            alt="nintendo switch"
          />
        </div>
      </div>
      <div className={styles.projectTextContainer}>
        <div className={styles.auraTitle}>
          <div className={styles.projectTitle}>
            Nintendo eShop
          </div>
          <p className={`${styles.projectDescription} ${styles.nintendoDesc}`}>
            The addition of a social aspect to the Nintendo eShop on the Switch
          </p>
        </div>
        <div>
          <BoxedLink
            href="/projects/nintendo"
            linkText="View Case Study"
          />
        </div>
      </div>
    </article>
  </BorderedCard>
);

export default NintendoCard;
