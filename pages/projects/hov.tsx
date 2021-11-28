/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import useIntersect from '@util/hooks/useIntersection';
import * as hov from 'data/hov';
import styles from '@styles/Projects2.module.scss';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';
import TitleCard from '@components/caseStudies/TitleCard';
import DesignProcessNav, { DesignProcessNavItem } from '@components/caseStudies/DesignProcessNav';
import ProjectCard from '@components/ProjectCard';
import BackToTopButton from '@components/BackToTopButton';

const designProcessLocations: DesignProcessNavItem[] = [
  {
    icon: '/assets/design_process/empathize.svg',
    iconAlt: '',
    text: 'Empathize',
    id: 'empathize',
  },
  {
    icon: '/assets/design_process/define.svg',
    iconAlt: '',
    text: 'Define',
    id: 'define',
  },
  {
    icon: '/assets/design_process/ideate.svg',
    iconAlt: '',
    text: 'Ideate',
    id: 'ideate',
  },
  {
    icon: '/assets/design_process/prototype.svg',
    iconAlt: '',
    text: 'Prototype',
    id: 'prototype',
  },
];

export default function Projects() {
  const textOptions = { root: null, threshold: 0.3, triggerOnce: true };
  const backToTopOptions = { root: null, threshold: 0.1 };
  const [header, isVisibleHeader] = useIntersect<HTMLDivElement>(backToTopOptions, true);
  const [empathize, isVisibleEmpathize] = useIntersect<HTMLDivElement>(textOptions);
  const [define, isVisibleDefine] = useIntersect<HTMLDivElement>(textOptions);
  const [ideate, isVisibleIdeate] = useIntersect<HTMLDivElement>(textOptions);
  const [prototyping, isVisiblePrototyping] = useIntersect<HTMLDivElement>(textOptions);
  const [test, isVisibleTest] = useIntersect<HTMLDivElement>(textOptions);
  const [implement, isVisibleImplement] = useIntersect<HTMLDivElement>(textOptions);
  return (
    <>
      <Head>
        <title>Eri Lambe - Heart of The Valley Case Study</title>
        <meta property="og:title" content="Eri Lambe - Heart of The Valley Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Heart of The Valley Case Study" />
      </Head>

      <PageLayout>
        <div ref={header}>
          <TitleCard
            h1Text="Heart of the Valley"
            overviewText="I designed an app from start to finish using the design process to iterate and create an efficient mood-tracking app"
          >
            <div style={{ height: 200 }} />
            {/* TODO: UPDATE THIS SPACING */}
          </TitleCard>
          <DesignProcessNav navItems={designProcessLocations} />
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
        <BackToTopButton isVisible={!isVisibleHeader} />
      </PageLayout>
      <Footer
        text="Have any questions about this project?"
        hrefLeft="/projects/carnival"
        leftLabel="Carnival"
        hrefRight="/projects/aura"
        rightLabel="Aura"
      />
    </>
  );
}
