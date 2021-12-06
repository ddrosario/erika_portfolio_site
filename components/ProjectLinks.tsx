import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import rightArrow from '@assets/right-arrow-black.png';
import rightArrowGreen from '@assets/right-arrow-green.png';
import leftArrow from '@assets/left-arrow-black.png';
import leftArrowGreen from '@assets/left-arrow-green.png';

import styles from '@styles/banners/ProjectLinks.module.scss';

interface ProjectLinksProps {
  href: string;
  linkText: string;
  left?: boolean;
  right?: boolean;
}

const ProjectLinks = ({
  href,
  linkText,
  left,
  right,
}: ProjectLinksProps) => (
  <Link
    href={href}
    passHref
  >
    <a
      className={styles.boxedLink}
      href="replace"
      onClick={() => window.scrollTo(0, 0)}
    >
      {left && (
        <div className={styles.icon}>
          <div className={styles.iconImg}>
            <Image src={leftArrow} alt="" width={24} height={24} />
          </div>
          <div className={styles.iconImgActive}>
            <Image src={leftArrowGreen} alt="" width={24} height={24} />
          </div>
        </div>
      )}
      <div className={styles.linkText}>
        {linkText}
      </div>
      {right && (
        <div className={styles.icon}>
          <div className={styles.iconImg}>
            <Image src={rightArrow} alt="" width={24} height={24} />
          </div>
          <div className={styles.iconImgActive}>
            <Image src={rightArrowGreen} alt="" width={24} height={24} />
          </div>
        </div>
      )}
    </a>
  </Link>
);

ProjectLinks.defaultProps = {
  left: false,
  right: false,
};

export default ProjectLinks;
