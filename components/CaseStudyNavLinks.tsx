import React from 'react';

import LinkTile from '@components/LinkTile';

import styles from '@styles/CaseStudyNavLinks.module.scss';

const CaseStudyNavLinks = () => (
  <div className={styles.grid}>
    <LinkTile
      href="/hov"
      text="Heart of the Valley"
    />
    <LinkTile
      href="/aura"
      text="Aura"
    />
    <LinkTile
      href="/nintendo"
      text="Nintendo eShop"
    />
    <LinkTile
      href="/carnival"
      text="Carnival Cruise"
    />
  </div>
);

export default CaseStudyNavLinks;
