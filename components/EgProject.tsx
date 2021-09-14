/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/EgProject.module.scss';
import BorderedCard from './hoc/BorderedCard';
import BoxedLink from './hoc/BoxedLink';

interface Project {
  projectImg: string;
  projectAlt: string;
  title: string;
  description: string;
  urlSlug: string;
}

const EgProject = ({
  projectImg,
  projectAlt,
  title,
  description,
  urlSlug,
}: Project) => (
  <BorderedCard>
    <article className={styles.egProject}>
      <div className={styles.projectTextContainer}>
        <div className={styles.projectTitle}>
          {title}
        </div>
        <p className={styles.projectDescription}>
          {description}
        </p>
      </div>
      <div className={styles.projectImg}>
        <img
          src={projectImg}
          alt={projectAlt}
        />
      </div>
      <div>
        <BoxedLink
          href={`/projects${urlSlug}`}
          linkText="View Case Study"
        />
      </div>
    </article>
  </BorderedCard>
);

export default EgProject;
