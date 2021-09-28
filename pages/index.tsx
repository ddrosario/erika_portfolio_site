import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '@styles/Home.module.scss';
import egStyles from '@styles/EgProject.module.scss';

import PageLayout from '@components/PageLayout';
import HelloBanner from '@components/banners/HelloBanner';
import EgProject from '@components/EgProject';
import BorderedCard from '@components/hoc/BorderedCard';
import Footer from '@components/Footer';
import RenderMobile from '@components/hoc/RenderMobile';
import RenderDefault from '@components/hoc/RenderDefault';
import AuraCard from '@components/projectCards/AuraCard';
import NintendoCard from '@components/projectCards/NintendoCard';
import CarnivalCard from '@components/projectCards/CarnivalCard';
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
  return (
    <>
      <Head>
        <title>Eri Lambe</title>
        <meta property="og:title" content="Eri Lambe Portfolio" />
        <meta name="twitter:title" content="Eri Lambe Portfolio" />
      </Head>
      <PageLayout>
        <div className={styles.card}>
          <HelloBanner />
        </div>
        <div className={styles.main}>
          <RenderMobile>
            {egProjectData.map((projectData) => (
              <div
                className={styles.card}
                key={projectData.title}
              >
                <EgProject
                  projectImg={projectData.projectImg}
                  projectAlt={projectData.projectAlt}
                  title={projectData.title}
                  description={projectData.description}
                  urlSlug={projectData.urlSlug}
                />
              </div>
            ))}
          </RenderMobile>
          <RenderDefault>
            <div className={`${styles.card} ${isVisible1 ? styles.inView : styles.notInView}`} ref={ref1}>
              <AuraCard />
            </div>
            <div className={`${styles.card} ${isVisible2 ? styles.inView : styles.notInView} ${styles.delay2}`} ref={ref2}>
              <NintendoCard />
            </div>
            <div className={`${styles.card} ${isVisible3 ? styles.inView : styles.notInView} ${styles.delay3}`} ref={ref3}>
              <CarnivalCard />
            </div>
          </RenderDefault>
        </div>
        <div className={`${isVisible4 ? styles.inView : styles.notInView} ${styles.delay4}`}>
          <BorderedCard>
            <div className={styles.ctaCard} ref={ref4}>
              <div className={egStyles.projectTitle}>
                Your project could be here!
              </div>
              <div className={egStyles.projectDescription}>
                Reach out to me on the form below and let’s chat!
              </div>
            </div>
          </BorderedCard>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
}
