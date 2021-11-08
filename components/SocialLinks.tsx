/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/CaseStudyNavLinks.module.scss';

import LinkTile from '@components/LinkTile';

const SocialLinks = () => (
  <div className={styles.grid}>
    <LinkTile
      href="mailto:Erikaalanalambe@gmail.com"
      backgroundImgUrl="https://picsum.photos/200"
      text="Email"
    />
    <LinkTile
      href="https://dribbble.com/EriLambe"
      backgroundImgUrl="https://picsum.photos/200"
      text="Dribbble"
    />
    <LinkTile
      href="https://erikaalanalambe.medium.com/"
      backgroundImgUrl="https://picsum.photos/200"
      text="Medium"
    />
    <LinkTile
      href="https://www.linkedin.com/in/erilambe"
      backgroundImgUrl="https://picsum.photos/200"
      text="LinkedIn"
    />
  </div>
);

export default SocialLinks;
