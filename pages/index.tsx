import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '@styles/Home.module.scss';

import PageLayout from '@components/PageLayout';
import HelloBanner from '@components/banners/HelloBanner';
import AboutMe from '@components/AboutMe';
import SocialLinks from '@components/SocialLinks';
import CaseStudyNavLinks from '@components/CaseStudyNavLinks';
import ContactMe from '@components/ContactMe';

import useIntersect from '@util/hooks/useIntersection';

const egProjectData = [
  {
    projectImg: '/assets/projects/aura/overview.png',
    projectAlt: '',
    title: 'Aura',
    description: 'A Mood-Tracking App',
    urlSlug: '/aura',
  },
  {
    projectImg: '/assets/projects/nintendo/overview.png',
    projectAlt: '',
    title: 'Nintendo',
    description: 'The addition of a social aspect to the Nintendo eShop on the Switch',
    urlSlug: '/nintendo',
  },
  {
    projectImg: '/assets/projects/carnival/overview.png',
    projectAlt: '',
    title: 'Carnival Cruiseline',
    description: 'A complete responsive redesign of the Carnival Cruiseline website',
    urlSlug: '/carnival',
  },
];

export default function Home() {
  const options = { root: null, threshold: 0.1, triggerOnce: true };
  const [ref1, isVisible1] = useIntersect(options);
  const [ref2, isVisible2] = useIntersect(options);
  const [ref3, isVisible3] = useIntersect(options);
  const [ref4, isVisible4] = useIntersect(options);
  console.log(ref4, '\n\n\nis visible? ', isVisible4);
  return (
    <>
      <Head>
        <title>Eri Lambe</title>
        <meta property="og:title" content="Eri Lambe Portfolio" />
        <meta name="twitter:title" content="Eri Lambe Portfolio" />
      </Head>
      <PageLayout>
        <div className={styles.blockMargin}>
          <HelloBanner />
        </div>
        <div className={styles.blockMargin}>
          <CaseStudyNavLinks />
        </div>
        <div className={`${isVisible4 ? styles.inView : styles.notInView} ${styles.delay4}`}>
          <div className={styles.ctaCard} ref={ref4}>
            <h4 className={styles.ctaHeader}>Your project could be here!</h4>
            <p>
              <Link href="mailto:Erikaalanalambe@gmail.com" passHref>
                <>
                  <a href="replace">Reach out</a>
                  <span>{' to me on the form below and let’s chat!'}</span>
                </>
              </Link>
            </p>
          </div>
        </div>
        <div className="divider" />
        <AboutMe />
        {/* <div className={styles.socialLinks}>
          <SocialLinks />
        </div> */}
        <div className="divider" />
        <article className={styles.resume}>
          <section>
            <h2>Volunteer Experience</h2>
            <div className={styles.resumeTitle}>
              <h4>Heart of the Valley</h4>
              <p className={styles.resumeDate}>Year: 2021-</p>
            </div>
            <ul>
              <li>
                Working with teams of Designers, Engineers, and Project Managers to iterate designs
              </li>
              <li>
                Being responsible for researching and presenting findings and design decisions to
                large groups in a remote setting
              </li>
            </ul>
          </section>
          <div className="divider" />
          <section>
            <h2>Education</h2>
            <section>
              <div className={styles.resumeTitle}>
                <h4>DesignLab</h4>
                <p className={styles.resumeDate}>Year: 2021</p>
              </div>
              <ul>
                <li>
                  Over 800+ hours of learning the design process, UX Research, and designing for
                  responsive web
                </li>
                <li>
                  Weekly presenting/explaining my design process and reasoning behind design
                  decisions
                </li>
              </ul>
            </section>
            <section className={styles.resumeLastSection}>
              <div className={styles.resumeTitle}>
                <h4>Arizona State University</h4>
                <p className={styles.resumeDate}>Year: 2018-2021</p>
              </div>
              <ul>
                <li>Graduated with a Bachelor’s in English Literature, with a minor in Media</li>
                <li>Experience tutoring my colleagues and helping them write great papers</li>
              </ul>
            </section>
          </section>
        </article>
        <ContactMe />
      </PageLayout>
      <div className="footer" />
    </>
  );
}
