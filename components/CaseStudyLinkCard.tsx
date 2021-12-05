import React from 'react';

import LinkTile from '@components/LinkTile';

import styles from '@styles/CaseStudyNavLinks.module.scss';

interface CaseStudyLinkCardProps {
  imgSrc: string;
  href: string;
  bodyText: string;
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const CaseStudyLinkCard = ({
  imgSrc,
  href,
  bodyText,
  children,
  title,
}: CaseStudyLinkCardProps) => (
  <div className={styles.card}>
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt=""
      />
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
