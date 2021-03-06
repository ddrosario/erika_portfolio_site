import React from 'react';

import ProjectLinks from '@components/ProjectLinks';
import LinkTile from '@components/LinkTile';

import styles from '@styles/banners/Footer.module.scss';

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
        <div className={styles.text}>{text}</div>
        {showProjectLinks ? (
          <div className={styles.footerButtons}>
            <div className={styles.left}>
              <ProjectLinks
                href={hrefLeft as string}
                linkText={leftLabel as string}
                left
              />
            </div>
            <div className={styles.contactBtn}>
              <LinkTile
                href="mailto:Erikaalanalambe@gmail.com"
                text="Contact"
              />
            </div>
            <div className={styles.right}>
              <ProjectLinks
                href={hrefRight as string}
                linkText={rightLabel as string}
                right
              />
            </div>
          </div>
        ) : (
          <div className={styles.contactBtn}>
            <LinkTile
              href="mailto:Erikaalanalambe@gmail.com"
              text="Contact"
            />
          </div>
        )}
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
