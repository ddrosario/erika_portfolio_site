/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import useIntersect from '@util/hooks/useIntersection';
import { data } from 'data/carnival';

import styles from '@styles/Projects2.module.scss';
import TitleCard from '@components/caseStudies/TitleCard';
import HelloBanner from '@components/banners/HelloBanner';
import ProjectCard from '@components/ProjectCard';
import BackToTopButton from '@components/BackToTopButton';

export default function Projects() {
  const backToTopOptions = { root: null, threshold: 0.1 };
  const [header, isVisibleHeader] = useIntersect<HTMLDivElement>(backToTopOptions, true);
  return (
    <>
      <Head>
        <title>Eri Lambe - Carnival Cruise Case Study</title>
        <meta property="og:title" content="Eri Lambe - Carnival Cruise Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Carnival Cruise Case Study" />
      </Head>
      <HelloBanner
        webp="/assets/banners/carnival-banner.webp"
        alt="laptop on desk on Carnival homepage"
      />
      <PageLayout>
        <div className={styles.mobileScrollFix}>
          <section>
            <div ref={header}>
              <TitleCard
                h1Text="Carnival Cruiseline"
                overviewText="I decided to update Carnival Cruise's old website to a more modern look by doing a complete redesign. Among those who enjoy taking cruises for vacations and holidays, it is a popular site, however, it has an outdated design and is difficult to navigate. My goal was to update the site and fix these problems. "
              />
            </div>
          </section>
          <div>
            {data.map((item, idx) => (
              <div
                key={item.title}
                className={idx % 2 === 0 ? 'contrast' : 'standard'}
              >
                <section>
                  <ProjectCard
                    title={item.title}
                    body={item.body}
                    images={item.images}
                  />
                </section>
              </div>
            ))}
          </div>
        </div>
        <BackToTopButton isVisible={!isVisibleHeader} />
      </PageLayout>
      <Footer
        text="Have any questions about this project?"
        hrefLeft="/nintendo"
        leftLabel="Nintendo"
        hrefRight="/hov"
        rightLabel="HoV"
      />
    </>
  );
}
