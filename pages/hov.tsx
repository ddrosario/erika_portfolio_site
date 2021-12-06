/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import useIntersect from '@util/hooks/useIntersection';
import { data } from 'data/hov';
import styles from '@styles/Projects2.module.scss';

import PageLayout from '@components/PageLayout';
import HelloBanner from '@components/banners/HelloBanner';
import Footer from '@components/Footer';
import TitleCard from '@components/caseStudies/TitleCard';
import ProjectCard from '@components/ProjectCard';
import BackToTopButton from '@components/BackToTopButton';
import ViewProject from '@components/ViewProject';

export default function Projects() {
  const textOptions = { root: null, threshold: 0.3, triggerOnce: true };
  const backToTopOptions = { root: null, threshold: 0.1 };
  const [header, isVisibleHeader] = useIntersect<HTMLDivElement>(backToTopOptions, true);
  const [empathize, isVisibleEmpathize] = useIntersect<HTMLDivElement>(textOptions);
  const [define, isVisibleDefine] = useIntersect<HTMLDivElement>(textOptions);
  const [ideate, isVisibleIdeate] = useIntersect<HTMLDivElement>(textOptions);
  const [prototyping, isVisiblePrototyping] = useIntersect<HTMLDivElement>(textOptions);
  const navItems = React.useMemo(() => {
    const designProcessLocations = [
      {
        icon: '/assets/design_process/empathize.svg',
        iconAlt: '',
        text: 'Empathize',
        id: 'empathize',
        ref: empathize,
      },
      {
        icon: '/assets/design_process/define.svg',
        iconAlt: '',
        text: 'Define',
        id: 'define',
        ref: define,
      },
      {
        icon: '/assets/design_process/ideate.svg',
        iconAlt: '',
        text: 'Ideate',
        id: 'ideate',
        ref: ideate,
      },
      {
        icon: '/assets/design_process/prototype.svg',
        iconAlt: '',
        text: 'Prototype',
        id: 'prototype',
        ref: prototyping,
      },
    ];
    return designProcessLocations;
  }, [define, empathize, ideate, prototyping]);

  return (
    <>
      <Head>
        <title>Eri Lambe - Heart of The Valley Case Study</title>
        <meta property="og:title" content="Eri Lambe - Heart of The Valley Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Heart of The Valley Case Study" />
      </Head>
      <div ref={header}>
        <HelloBanner
          webp="/assets/banners/heart-of-the-valley-banner.webp"
          alt="laptop with heart of the valley artwork"
        />
      </div>
      <PageLayout>
        <div className={styles.mobileScrollFix}>
          <section>
            <TitleCard
              h1Text="Heart of the Valley"
              overviewText="The Code for America network provides an opportunity for me to work with a team of designers, programmers, project managers, and others in the development of this website. By next year, the desktop version will become available, followed by the mobile version. It is intended to be an easily accessible website where locals and visitors can locate art installations in San Jose, California, as well as get information about some of the artists and works. "
            />
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
        <section>
          <ViewProject
            href="https://www.figma.com/file/HMDVYiExG8mMbiEv4UuOgd/Heart-of-the-Valley?node-id=0%3A1"
            ctaText="View File"
            header="For Now..."
            body="Here is the Figma file with all my current iterations of the page"
          />
        </section>
      </PageLayout>
      <Footer
        text="Have any questions about this project?"
        hrefLeft="/carnival"
        leftLabel="Carnival"
        hrefRight="/aura"
        rightLabel="Aura"
      />
    </>
  );
}
