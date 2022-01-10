/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

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
}: CaseStudyLinkCardProps) => {
  const [showText, setShowText] = React.useState(true);

  return (
    <div>
      <Link
        href={href}
        passHref
      >
        <a
          href="replace"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
          onMouseDown={() => setShowText(true)}
          onTouchStart={() => setShowText(true)}
        >
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <picture>
                <source type="image/webp" srcSet={webp} />
                <img
                  className={styles.backgroundImg}
                  src={jpg}
                  alt=""
                  style={{ filter: showText ? 'blur(4px)' : 'blur(0)' }}
                />
              </picture>
            </div>
            <div
              className={styles.textSection}
              style={{ opacity: showText ? 1 : 0 }}
            >
              <div className={styles.title}>
                {title}
              </div>
              <div className={styles.bodyText}>
                {children}
                <span>{bodyText}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.textSectionMobile}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.bodyText}>
          {children}
          <span>{bodyText}</span>
        </div>
      </div>
    </div>
  );
};

// const CaseStudyLinkCard = ({
//   webp,
//   jpg,
//   href,
//   bodyText,
//   children,
//   title,
// }: CaseStudyLinkCardProps) => (
//   <div className={styles.card}>
//     <div className={styles.imgContainer}>
//       <picture>
//         <source type="image/webp" srcSet={webp} />
//         <img
//           src={jpg}
//           alt=""
//         />
//       </picture>
//     </div>
//     <div className={styles.title}>
//       {title}
//     </div>
//     <div className={styles.bodyText}>
//       {children}
//       <span>{bodyText}</span>
//     </div>
//     <div className={styles.link}>
//       <LinkTile
//         text="View Case Study"
//         href={href}
//       />
//     </div>
//   </div>
// );

CaseStudyLinkCard.defaultProps = {
  children: null,
};

export default CaseStudyLinkCard;
