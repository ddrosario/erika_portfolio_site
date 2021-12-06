/* eslint-disable @next/next/no-img-element */
import React from 'react';

import LinkTile from '@components/LinkTile';

import styles from '@styles/CaseStudyNavLinks.module.scss';

interface CaseStudyLinkCardProps {
  webp: string;
  jpg: string;
  href: string;
  bodyText: string;
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const CaseStudyLinkCard = ({
  webp,
  jpg,
  href,
  bodyText,
  children,
  title,
}: CaseStudyLinkCardProps) => (
  <div className={styles.card}>
    <div className={styles.imgContainer}>
      <picture>
        <source type="image/webp" srcSet={webp} />
        <img
          src={jpg}
          alt=""
        />
      </picture>
    </div>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.bodyText}>
      {children}
      <span>{bodyText}</span>
    </div>
    <div className={styles.link}>
      <LinkTile
        text="View Case Study"
        href={href}
      />
    </div>
  </div>
);

CaseStudyLinkCard.defaultProps = {
  children: null,
};

export default CaseStudyLinkCard;
