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
  return (
    <>
      <Head>
        <title>Eri Lambe</title>
        <meta name="description" content="Eri Lambe" />
        <link rel="icon" href="/favicon.ico" />
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
            <div className={styles.card}>
              <AuraCard />
            </div>
            <div className={styles.card}>
              <NintendoCard />
            </div>
            <div className={styles.card}>
              <CarnivalCard />
            </div>
          </RenderDefault>
        </div>
        <BorderedCard>
          <div className={styles.ctaCard}>
            <div className={egStyles.projectTitle}>
              Your project could be here!
            </div>
            <div className={egStyles.projectDescription}>
              Reach out to me on the form below and let’s chat!
            </div>
          </div>
        </BorderedCard>
      </PageLayout>
      <Footer />
    </>
  );
}
