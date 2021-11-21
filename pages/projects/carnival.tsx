/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import * as carnival from 'data/carnival';

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
        <title>Eri Lambe - Aura Case Study</title>
        <meta property="og:title" content="Eri Lambe - Aura Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Aura Case Study" />
      </Head>

      <PageLayout>
        <TitleCard
          h1Text="Aura"
          subtext="A Mood-Tracking App"
          overviewText="I designed an app from start to finish using the design process to iterate and create an efficient mood-tracking app"
        >
          <div>
            <img src="/assets/projects/lg_aura/overview.png" alt="app mock up on phone" />
          </div>
        </TitleCard>
        <DesignProcessNav navItems={designProcessLocations} />
        <section id="empathize">
          <div className="headerDivider">
            <h2>Step One: Empathize</h2>
            <section>
              {carnival.empathize.map((item) => (
                <div key={item.title} className={styles.caseStudyItem}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <div>
                    {item.images.map((img) => (
                      <img
                        src={img.webp}
                        key={img.jpg}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
        <section id="define">
          <div className="headerDivider">
            <h2>Define</h2>
            <section>
              {carnival.define.map((item) => (
                <div key={item.title} className={styles.caseStudyItem}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <div>
                    {item.images.map((img) => (
                      <img
                        src={img.webp}
                        key={img.jpg}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
        <section id="ideate">
          <div className="headerDivider">
            <h2>Ideate</h2>
            <section>
              {carnival.ideate.map((item) => (
                <div key={item.title} className={styles.caseStudyItem}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <div>
                    {item.images.map((img) => (
                      <img
                        src={img.webp}
                        key={img.jpg}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
        <section id="prototype">
          <div className="headerDivider">
            <h2>Prototype</h2>
            <section>
              {carnival.prototyping.map((item) => (
                <div key={item.title} className={styles.caseStudyItem}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <div>
                    {item.images.map((img) => (
                      <img
                        src={img.webp}
                        key={img.jpg}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
        <section id="test">
          <div className="headerDivider">
            <h2>Test</h2>
            <section>
              {carnival.testing.map((item) => (
                <div key={item.title} className={styles.caseStudyItem}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <div>
                    {item.images.map((img) => (
                      <img
                        src={img.webp}
                        key={img.jpg}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
        <section id="implement">
          <div className="headerDivider">
            <h2>Implement</h2>
            <section>
              {carnival.implement.map((item) => (
                <div key={item.title} className={styles.caseStudyItem}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <div>
                    {item.images.map((img) => (
                      <img
                        src={img.webp}
                        key={img.jpg}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
      </PageLayout>
      <Footer text="Have any questions about this project?" />
    </>
  );
}
