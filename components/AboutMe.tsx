/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import profileImg from '@assets/profile-img.jpeg';

import styles from '@styles/About.module.scss';

const aboutMeParagraph = ' with experience in both the User Experience and User Interface sides of design. Design, art, and community are passions of mine and I am always excited to learn new things or new ways of doing things. I got into design when I came across a book entitled The Design of Everyday Things by Don Norman and ended up buying it for myself. I was fascinated to think about the designs of everything around me and the process of ideating, creating, and implementing new designs for things that I use every day.';

export default function About() {
  return (
    <article>
      <h2>A Little About Me</h2>
      <div>
        <div className={styles.profileContainer}>
          <div className={styles.profileImg}>
            <img src="/assets/profile-img.jpeg" alt="Erika smiling" />
          </div>
        </div>
        <p>
          <strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a Product Designer based in San Jose, Ca
          </strong>
          <span>{aboutMeParagraph}</span>
        </p>
      </div>
    </article>
  );
}
