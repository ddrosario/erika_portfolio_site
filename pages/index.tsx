import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '@styles/Home.module.scss';

import PageLayout from '@components/PageLayout';
import HelloBanner from '@components/banners/HelloBanner';
import AboutMe from '@components/AboutMe';
import CaseStudyNavLinks from '@components/CaseStudyNavLinks';
import Footer from '@components/Footer';
import BackToTopButton from '@components/BackToTopButton';

import useIntersect from '@util/hooks/useIntersection';

interface HomeProps {
  section: string | undefined;
}

export default function Home({ section }: HomeProps) {
  const options = { root: null, threshold: 0.1, triggerOnce: true };

  const options2 = { root: null, threshold: 0.4, triggerOnce: true };
  const backToTopOptions = { root: null, threshold: 0.1 };
  const [header, isVisibleHeader] = useIntersect<HTMLDivElement>(backToTopOptions, true);
  const [ref1, isVisible1] = useIntersect<HTMLDivElement>(options2);
  const [ref2, isVisible2] = useIntersect<HTMLDivElement>(options2);
  const [ref3, isVisible3] = useIntersect<HTMLDivElement>(options2);
  const [yourProject, isVisible4] = useIntersect<HTMLDivElement>(options);
  const [arizonaRef, isVisibleArizona] = useIntersect<HTMLUListElement>(options2);
  const [volunteerRef, isVisibleVolunteer] = useIntersect<HTMLUListElement>(options2);
  const [designLabRef, isVisibleDesign] = useIntersect<HTMLUListElement>(options2);

  React.useEffect(() => {
    if (section === 'about-me') {
      // const aboutMeSection = document.getElementById('about-me-section');
      ref1.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ref1, section]);

  return (
    <>
      <Head>
        <title>Eri Lambe</title>
        <meta property="og:title" content="Eri Lambe Portfolio" />
        <meta name="twitter:title" content="Eri Lambe Portfolio" />
      </Head>
      <div ref={header}>
        <HelloBanner
          webp="/assets/banners/main-banner.webp"
          jpg="/assets/banners/main-banner.jpg"
          alt="laptop and coffee"
          showText
          bannerAlignBottom
        />
      </div>
      <PageLayout>
        <section>
          <div className={styles.myWork}>
            <h2 className={styles.myWorkH2}>My Work</h2>
            <CaseStudyNavLinks />
          </div>
          <div className={`${isVisible4 ? styles.inView : styles.notInView}`}>
            <div className={styles.ctaCard} ref={yourProject}>
              <h4 className={styles.ctaHeader}>Your project could be here!</h4>
              <p>
                <Link href="mailto:Erikaalanalambe@gmail.com" passHref>
                  <>
                    <a
                      className={styles.reachOut}
                      href="replace"
                    >
                      Reach out
                    </a>
                    <span>{' to me on the form below and let’s chat!'}</span>
                  </>
                </Link>
              </p>
            </div>
          </div>
        </section>
        <div className="contrast" id="about-me">
          <div ref={ref1}>
            <section className={`${isVisible1 ? styles.inView : styles.notInView}`}>
              <AboutMe />
            </section>
          </div>
        </div>
        <article className={styles.resume}>
          <section className={`${isVisible2 ? styles.inView : styles.notInView}`}>
            <div ref={ref2}>
              <h2>Volunteer Experience</h2>
            </div>
            <div className={styles.resumeTitle}>
              <h4>Heart of the Valley</h4>
              <p className={styles.resumeDate}>Year: 2021-</p>
            </div>
            <ul
              ref={volunteerRef}
              className={isVisibleVolunteer ? styles.inViewUL : styles.notInViewUL}
            >
              <li>
                Working with teams of Designers, Engineers, and Project Managers to iterate designs
              </li>
              <li>
                Being responsible for researching and presenting findings and design decisions to
                large groups in a remote setting
              </li>
            </ul>
          </section>
          <div className="contrast">
            <section className={`${isVisible3 ? styles.inView : styles.notInView}`}>
              <div ref={ref3}>
                <h2>Education</h2>
              </div>
              <div>
                <div className={styles.resumeTitle}>
                  <h4>DesignLab</h4>
                  <p className={styles.resumeDate}>Year: 2021</p>
                </div>
                <ul
                  ref={designLabRef}
                  className={isVisibleDesign ? styles.inViewUL : styles.notInViewUL}
                >
                  <li>
                    Over 800+ hours of learning the design process, UX Research, and designing for
                    responsive web
                  </li>
                  <li>
                    Weekly presenting/explaining my design process and reasoning behind design
                    decisions
                  </li>
                </ul>
              </div>
              <div className={styles.resumeLastSection}>
                <div className={styles.resumeTitle}>
                  <h4>Arizona State University</h4>
                  <p className={styles.resumeDate}>Year: 2018-2021</p>
                </div>
                <ul
                  ref={arizonaRef}
                  className={isVisibleArizona ? styles.inViewUL : styles.notInViewUL}
                >
                  <li>Graduated with a Bachelor’s in English Literature, with a minor in Media</li>
                  <li>Experience tutoring my colleagues and helping them write great papers</li>
                </ul>
              </div>
            </section>
          </div>
        </article>
        <BackToTopButton isVisible={!isVisibleHeader} />
      </PageLayout>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { section } = context.query;

  let propSection = null;
  if (typeof section === 'string') {
    propSection = section;
  }
  return {
    props: { section: propSection },
  };
}
