/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/CaseStudyNavLinks.module.scss';

import LinkTile from '@components/LinkTile';

const SocialLinks = () => (
  <div className={styles.grid}>
    <LinkTile
      href="mailto:Erikaalanalambe@gmail.com"
      text="Email"
    />
    <LinkTile
      href="https://dribbble.com/EriLambe"
      text="Dribbble"
    />
    <LinkTile
      href="https://erikaalanalambe.medium.com/"
      text="Medium"
    />
    <LinkTile
      href="https://www.linkedin.com/in/erilambe"
      text="LinkedIn"
    />
  </div>
);

export default SocialLinks;
