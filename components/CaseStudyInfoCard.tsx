/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classnames from 'classnames';

import styles from '@styles/CaseStudyNavLinks.module.scss';

interface CaseStudyLinkCardProps {
  webp: string;
  jpg: string;
  bodyText: string;
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const CaseStudyLinkCard = ({
  webp,
  jpg,
  bodyText,
  children,
  title,
}: CaseStudyLinkCardProps) => {
  const [showText, setShowText] = React.useState(false);

  return (
    <button
      className={classnames(styles.card, styles.infoCardBtn)}
      type="button"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      onClick={() => setShowText(!showText)}
    >
      <div className={styles.imgContainer}>
        <picture>
          <source type="image/webp" srcSet={webp} />
          <img
            className={styles.backgroundImg}
            src={jpg}
            alt=""
          />
        </picture>
      </div>
      <div
        className={styles.textSection}
        style={{
          opacity: showText ? 1 : 0,
        }}
      >
        <div className={styles.infoCardTitle}>
          {title}
        </div>
        <div className={styles.bodyText}>
          {children}
          <span>{bodyText}</span>
        </div>
      </div>
    </button>
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
