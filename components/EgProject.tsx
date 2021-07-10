import React from 'react';

import styles from '../styles/EgProject.module.scss';

interface Project {
  projectImg: string;
  projectAlt: string;
  title: string;
  description: string;
}

const EgProject = ({
  projectImg,
  projectAlt,
  title,
  description,
}: Project) => (
  <article className={styles.egProject}>
    <div className={styles.borderedProject}>
      <div className={styles.projectImg}>
        <img
          src={projectImg}
          alt={projectAlt}
        />
      </div>
    </div>
    <div className={styles.spacer} />
    <div className={styles.borderedProject}>
      <div className={styles.project}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </article>
);

export default EgProject;
