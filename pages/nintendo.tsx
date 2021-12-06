/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import { data } from 'data/nintendo';
import styles from '@styles/Projects2.module.scss';
import useIntersect from '@util/hooks/useIntersection';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';
import TitleCard from '@components/caseStudies/TitleCard';
import HelloBanner from '@components/banners/HelloBanner';
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
      <div ref={header}>
        <HelloBanner
          webp="/assets/banners/nintendo-banner.webp"
          alt="nintendo switch mockup"
        />
      </div>
      <PageLayout>
        <div className={styles.mobileScrollFix}>
          <section>
            <TitleCard
              h1Text="Nintendo eShop"
              overviewText="With the addition of the social feature, gamers now have the ability to create wishlists of games they want their friends to see and purchase online for them as gifts in the Nintendo eShop on the Switch. This project was carried out during the peak of the pandemic when people mostly played online games with their friends. I began by reconstructing the user profile portion of the console, adding the newly added features, and adding some of the new elements to the store, such as the customization of gift messages."
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
        <section>
          <ViewProject
            href="https://sketch.com/s/31163d84-60e2-43fb-b5a6-8d84c6236e53/a/l1jbkAz/play"
            ctaText="View Prototype"
            header="Final Product"
            body="Using Sketch as a platform, I added the branding and the final iterations. Every little detail of each page took a lot of time, but the end result was a seamless addition to the eShop. As a way to add more personalization and revenue to the gifting of games, I added the option to add virtual wrapping paper and messages. "
          />
        </section>
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
