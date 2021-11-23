/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import * as nintendo from 'data/nintendo';

import styles from '@styles/Projects2.module.scss';
import TitleCard from '@components/caseStudies/TitleCard';
import DesignProcessNav, { DesignProcessNavItem } from '@components/caseStudies/DesignProcessNav';

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
  {
    icon: '/assets/design_process/test.svg',
    iconAlt: '',
    text: 'Test',
    id: 'test',
  },
  {
    icon: '/assets/design_process/implement.svg',
    iconAlt: '',
    text: 'Implement',
    id: 'implement',
  },
];

export default function Projects() {
  const ref = React.useRef<HTMLElement>(null);
  const designNav = React.useMemo(
    () => ({
      emphasize: {},
    }),
    [],
  );
  return (
    <>
      <Head>
        <title>Eri Lambe - Nintendo Case Study</title>
        <meta property="og:title" content="Eri Lambe - Nintendo Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Nintendo Case Study" />
      </Head>

      <PageLayout>
        <TitleCard
          h1Text="Nintendo eShop"
          overviewText="I added a much-needed social feature to the Nintendo eShop that allows users to purchase and send each other games off of personalized wishlists."
        >
          <div className={styles.nintendoTitleCard}>
            <img src="/assets/projects/nintendo/switch.webp" alt="Nintendo switch with eShop open" />
          </div>
        </TitleCard>
        <DesignProcessNav navItems={designProcessLocations} />
        <section id="empathize">
          <div className="headerDivider">
            <h2>Step One: Empathize</h2>
          </div>
          <section>
            {nintendo.empathize.map((item) => (
              <div key={item.title} className={styles.caseStudyItem}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className={styles.imageContainer}>
                  {item.images.map((img) => (
                    <img
                      className={styles.caseStudyImg}
                      src={img.webp}
                      key={img.jpg}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
        <section id="define">
          <div className="headerDivider">
            <h2>Step Two: Define</h2>
          </div>
          <section>
            {nintendo.define.map((item) => (
              <div key={item.title} className={styles.caseStudyItem}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className={styles.imageContainer}>
                  {item.images.map((img) => (
                    <img
                      className={styles.caseStudyImg}
                      src={img.webp}
                      key={img.jpg}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
        <section id="ideate">
          <div className="headerDivider">
            <h2>Step Three: Ideate</h2>
          </div>
          <section>
            {nintendo.ideate.map((item) => (
              <div key={item.title} className={styles.caseStudyItem}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className={styles.imageContainer}>
                  {item.images.map((img) => (
                    <img
                      className={styles.caseStudyImg}
                      src={img.webp}
                      key={img.jpg}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
        <section id="prototype">
          <div className="headerDivider">
            <h2>Step Four: Prototype</h2>
          </div>
          <section>
            {nintendo.prototyping.map((item) => (
              <div key={item.title} className={styles.caseStudyItem}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className={styles.imageContainer}>
                  {item.images.map((img) => (
                    <img
                      className={styles.caseStudyImg}
                      src={img.webp}
                      key={img.jpg}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
        <section id="test">
          <div className="headerDivider">
            <h2>Step Five: Test</h2>
          </div>
          <section>
            {nintendo.testing.map((item) => (
              <div key={item.title} className={styles.caseStudyItem}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className={styles.imageContainer}>
                  {item.images.map((img) => (
                    <img
                      className={styles.caseStudyImg}
                      src={img.webp}
                      key={img.jpg}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
        <section id="implement">
          <div className="headerDivider">
            <h2>Step Six: Implement</h2>
          </div>
          <section>
            {nintendo.implement.map((item) => (
              <div key={item.title} className={styles.caseStudyItem}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className={styles.imageContainer}>
                  {item.images.map((img) => (
                    <img
                      className={styles.caseStudyImg}
                      src={img.webp}
                      key={img.jpg}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
      </PageLayout>
      <Footer
        text="Have any questions about this project?"
        hrefLeft="/projects/aura"
        leftLabel="Aura"
        hrefRight="/projects/carnival"
        rightLabel="Carnival"
      />
    </>
  );
}
