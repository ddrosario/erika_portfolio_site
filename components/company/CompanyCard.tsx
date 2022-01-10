/* eslint-disable @next/next/no-img-element */
import React from 'react';

import useIntersect from '@util/hooks/useIntersection';

import styles from '@styles/Projects2.module.scss';

interface ProjectCardProps {
  title: string;
  body: string;
  children?: JSX.Element | JSX.Element[] | null;
}

const ProjectCard = ({ title, body, children }: ProjectCardProps) => {
  const textOptions = { root: null, threshold: 0.3, triggerOnce: true };
  const [textRef, isVisibleText] = useIntersect<HTMLDivElement>(textOptions);

  return (
    <>
      <div className={styles.caseStudyItem}>
        <div ref={textRef} className={isVisibleText ? styles.inViewRight : styles.notInViewRight}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        {children}
      </div>
    </>
  );
};

ProjectCard.defaultProps = {
  children: null,
};

export default ProjectCard;
