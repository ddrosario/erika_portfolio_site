import React from 'react';

import LinkTile from '@components/LinkTile';

import styles from '@styles/CaseStudyNavLinks.module.scss';

const CaseStudyNavLinks = () => (
  <div className={styles.grid}>
    <LinkTile
      href="/projects/heart"
      text="Heart of the Valley"
    />
    <LinkTile
      href="/projects/aura"
      text="Aura"
    />
    <LinkTile
      href="/projects/nintendo"
      text="Nintendo eShop"
    />
    <LinkTile
      href="/projects/carnival"
      text="Carnival Cruise"
    />
  </div>
);

export default CaseStudyNavLinks;
