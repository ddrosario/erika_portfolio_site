/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

import useIntersect from '@util/hooks/useIntersection';

import styles from '@styles/Projects2.module.scss';

interface ProjectCardProps {
  images: {
    webp: string;
    jpg: string;
    jpgLg: string;
    // png: string;
  }[];
  title: string;
  body: string;
  link: {
    text: string;
    href: string;
  } | null;
}

const ProjectCard = ({
  title,
  body,
  images,
  link,
}: ProjectCardProps) => {
  const textOptions = { root: null, threshold: 0.3, triggerOnce: true };
  const imagesOptions = { root: null, threshold: 0.3, triggerOnce: true };
  if (images.length > 2) {
    imagesOptions.threshold = 0.05;
  }
  const [isOpen, setIsOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState('');
  const [textRef, isVisibleText] = useIntersect<HTMLDivElement>(textOptions);
  const [imageRef, isVisibleImage] = useIntersect<HTMLDivElement>(imagesOptions);

  React.useEffect(() => {
    const bodyNode = document.getElementsByTagName('BODY')[0];
    if (isOpen) {
      bodyNode.classList.add('modal-open');
    } else {
      bodyNode.classList.remove('modal-open');
    }
    return () => bodyNode.classList.remove('modal-open');
  }, [isOpen]);

  return (
    <>
      <div className={styles.caseStudyItem}>
        <div
          ref={textRef}
          className={isVisibleText ? styles.inViewRight : styles.notInViewRight}
        >
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <div
          className={isVisibleImage ? styles.inViewLeft : styles.notInViewLeft}
          ref={imageRef}
        >
          {images.map((img) => (
            <button
              className={styles.caseStudyBtn}
              type="button"
              onClick={() => {
                setImgSrc(img.jpgLg);
                setIsOpen(true);
              }}
              key={img.jpg}
            >
              <picture>
                <source type="image/webp" srcSet={img.webp} />
                <source type="image/jpeg" srcSet={img.jpgLg} />
                <img
                  className={styles.caseStudyImg}
                  src={img.jpg}
                  alt=""
                />
              </picture>
            </button>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={imgSrc}
          // nextSrc={images[(photoIndex + 1) % images.length]}
          // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setIsOpen(false);
            setImgSrc('');
          }}
          imageCaption={link === null ? null : (
            <Link
              href={link.href}
              passHref
            >
              <a
                className={styles.lightboxLink}
                href="replace"
              >
                {link.text}
              </a>
            </Link>
          )}
        />
      )}
    </>
  );
};

export default ProjectCard;
