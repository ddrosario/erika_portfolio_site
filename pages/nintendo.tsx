/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import * as nintendo from 'data/nintendo';
import styles from '@styles/Projects2.module.scss';
import useIntersect from '@util/hooks/useIntersection';

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
  const [test, isVisibleTest] = useIntersect<HTMLDivElement>(textOptions);
  const [implement, isVisibleImplement] = useIntersect<HTMLDivElement>(textOptions);

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
      {
        icon: '/assets/design_process/test.svg',
        iconAlt: '',
        text: 'Test',
        id: 'test',
        ref: test,
      },
      {
        icon: '/assets/design_process/implement.svg',
        iconAlt: '',
        text: 'Implement',
        id: 'implement',
        ref: implement,
      },
    ];
    return designProcessLocations;
  }, [define, empathize, ideate, implement, prototyping, test]);
  return (
    <>
      <Head>
        <title>Eri Lambe - Nintendo Case Study</title>
        <meta property="og:title" content="Eri Lambe - Nintendo Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Nintendo Case Study" />
      </Head>

      <PageLayout>
        <div className={styles.mobileScrollFix}>
          <div ref={header}>
            <TitleCard
              h1Text="Nintendo eShop"
              overviewText="I added a much-needed social feature to the Nintendo eShop that allows users to purchase and send each other games off of personalized wishlists."
            >
              <div className={styles.nintendoTitleCard}>
                <img src="/assets/projects/nintendo/switch.webp" alt="Nintendo switch with eShop open" />
              </div>
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
              {nintendo.empathize.map((item) => (
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
              {nintendo.define.map((item) => (
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
              {nintendo.ideate.map((item) => (
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
              {nintendo.prototyping.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  images={item.images}
                />
              ))}
            </section>
          </section>
          <section id="test">
            <div
              ref={test}
              className={`headerDivider ${isVisibleTest ? styles.inView : styles.notInView}`}
            >
              <h2>Step Five: Test</h2>
            </div>
            <section>
              {nintendo.testing.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  images={item.images}
                />
              ))}
            </section>
          </section>
          <section id="implement">
            <div
              ref={implement}
              className={`headerDivider ${isVisibleImplement ? styles.inView : styles.notInView}`}
            >
              <h2>Step Six: Implement</h2>
            </div>
            <section>
              {nintendo.implement.map((item) => (
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
        hrefLeft="/aura"
        leftLabel="Aura"
        hrefRight="/carnival"
        rightLabel="Carnival"
      />
    </>
  );
}