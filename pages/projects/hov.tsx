/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import * as hov from 'data/hov';

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
        <title>Eri Lambe - Heart of The Valley Case Study</title>
        <meta property="og:title" content="Eri Lambe - Heart of The Valley Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Heart of The Valley Case Study" />
      </Head>

      <PageLayout>
        <TitleCard
          h1Text="Heart of the Valley"
          strongSubtext="Ongoing…"
          subtext=" A website for helping visitors and locals find artworks in their area"
          overviewText="I designed an app from start to finish using the design process to iterate and create an efficient mood-tracking app"
        >
          <div style={{ height: 200 }} />
          {/* TODO: UPDATE THIS SPACING */}
        </TitleCard>
        <DesignProcessNav navItems={designProcessLocations} />
        <section id="empathize">
          <div className="headerDivider">
            <h2>Step One: Empathize</h2>
          </div>
          <section>
            {hov.empathize.map((item) => (
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
            {hov.define.map((item) => (
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
            {hov.ideate.map((item) => (
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
            {hov.prototyping.map((item) => (
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
      <Footer text="Have any questions about this project?" />
    </>
  );
}
