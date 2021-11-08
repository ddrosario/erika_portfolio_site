import React from 'react';

import LinkTile from '@components/LinkTile';

import styles from '@styles/CaseStudyNavLinks.module.scss';

const CaseStudyNavLinks = () => (
  <div className={styles.grid}>
    <LinkTile
      href="/projects/heart"
      backgroundImgUrl="https://picsum.photos/200"
      text="Heart of the Valley"
    />
    <LinkTile
      href="/projects/aura"
      backgroundImgUrl="https://picsum.photos/200"
      text="Aura"
    />
    <LinkTile
      href="/projects/nintendo"
      backgroundImgUrl="https://picsum.photos/200"
      text="Nintendo eShop"
    />
    <LinkTile
      href="/projects/carnival"
      backgroundImgUrl="https://picsum.photos/200"
      text="Carnival Cruise"
    />
  </div>
);

export default CaseStudyNavLinks;
