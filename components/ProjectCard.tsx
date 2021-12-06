/* eslint-disable @next/next/no-img-element */
import React from 'react';

import useIntersect from '@util/hooks/useIntersection';

import styles from '@styles/Projects2.module.scss';

interface ProjectCardProps {
  images: {
    webp: string;
    jpg: string;
  }[];
  title: string;
  body: string;
}

const ProjectCard = ({ title, body, images }: ProjectCardProps) => {
  const textOptions = { root: null, threshold: 0.3, triggerOnce: true };
  const imagesOptions = { root: null, threshold: 0.3, triggerOnce: true };
  if (images.length > 2) {
    imagesOptions.threshold = 0.05;
  }
  const [textRef, isVisibleText] = useIntersect<HTMLDivElement>(textOptions);
  const [imageRef, isVisibleImage] = useIntersect<HTMLDivElement>(imagesOptions);
  return (
    <div className={styles.caseStudyItem}>
      <div
        ref={textRef}
        className={isVisibleText ? styles.inViewRight : styles.notInViewRight}
      >
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div
        className={isVisibleImage ? styles.inViewLeft : styles.notInViewLeft}
        ref={imageRef}
      >
        {images.map((img) => (
          <img
            className={styles.caseStudyImg}
            src={img.webp}
            key={img.jpg}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
