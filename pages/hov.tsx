/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import useIntersect from '@util/hooks/useIntersection';
import * as hov from 'data/hov';
import styles from '@styles/Projects2.module.scss';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';
import TitleCard from '@components/caseStudies/TitleCard';
import DesignProcessNav from '@components/caseStudies/DesignProcessNav';
import ProjectCard from '@components/ProjectCard';
import BackToTopButton from '@components/BackToTopButton';

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

      <PageLayout>
        <div className={styles.mobileScrollFix}>
          <div ref={header}>
            <TitleCard
              h1Text="Heart of the Valley"
              overviewText=" A website for helping visitors and locals find artworks in their area. In this project, I work with a team of designers, developers, project managers, and more to build this website. It is set to launch by next year for desktop with mobile to come after."
              strongOverviewText="Ongoing…"
            >
              <div style={{ height: 200 }} />
              {/* TODO: UPDATE THIS SPACING */}
            </TitleCard>
            <DesignProcessNav navItems={navItems} />
          </div>
          <section id="empathize">
            <div
              ref={empathize}
              className={`headerDivider ${isVisibleEmpathize ? styles.inView : styles.notInView}`}
            >
              <h2>Step One: Empathize</h2>
            </div>
            <section>
              {hov.empathize.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  images={item.images}
                />
              ))}
            </section>
          </section>
          <section id="define">
            <div
              ref={define}
              className={`headerDivider ${isVisibleDefine ? styles.inView : styles.notInView}`}
            >
              <h2>Step Two: Define</h2>
            </div>
            <section>
              {hov.define.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  images={item.images}
                />
              ))}
            </section>
          </section>
          <section id="ideate">
            <div
              ref={ideate}
              className={`headerDivider ${isVisibleIdeate ? styles.inView : styles.notInView}`}
            >
              <h2>Step Three: Ideate</h2>
            </div>
            <section>
              {hov.ideate.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  images={item.images}
                />
              ))}
            </section>
          </section>
          <section id="prototype">
            <div
              ref={prototyping}
              className={`headerDivider ${isVisiblePrototyping ? styles.inView : styles.notInView}`}
            >
              <h2>Step Four: Prototype</h2>
            </div>
            <section>
              {hov.prototyping.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  images={item.images}
                />
              ))}
            </section>
          </section>
        </div>
        <BackToTopButton isVisible={!isVisibleHeader} />
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
