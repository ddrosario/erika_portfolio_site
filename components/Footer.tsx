import React from 'react';
import Link from 'next/link';
import styles from '@styles/banners/Footer.module.scss';

import ProjectLinks from '@components/ProjectLinks';

interface FooterProps {
  text?: string;
  hrefLeft?: string;
  leftLabel?: string;
  hrefRight?: string;
  rightLabel?: string;
}

const Footer = ({
  text,
  hrefLeft,
  leftLabel,
  hrefRight,
  rightLabel,
}: FooterProps) => {
  const showProjectLinks = hrefLeft && hrefRight && leftLabel && rightLabel;

  return (
    <footer id="footer">
      <section className={styles.root}>
        <div>{text}</div>
        <div className={styles.footerButtons}>
          {showProjectLinks && (
            <ProjectLinks href={hrefLeft} linkText={leftLabel} left />
          )}
          <Link href="mailto:Erikaalanalambe@gmail.com" passHref>
            <a className={styles.contactBtn} href="replace">
              Contact
            </a>
          </Link>
          {showProjectLinks && (
            <ProjectLinks href={hrefRight} linkText={rightLabel} right />
          )}
        </div>
      </section>
      <div className="footer" />
    </footer>
  );
};

Footer.defaultProps = {
  text: "Let's work together!",
  hrefLeft: null,
  leftLabel: null,
  hrefRight: null,
  rightLabel: null,
};

export default Footer;
