/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import { data } from 'data/aura';
import useIntersect from '@util/hooks/useIntersection';

import styles from '@styles/Projects2.module.scss';

import HelloBanner from '@components/banners/HelloBanner';
import TitleCard from '@components/caseStudies/TitleCard';
import ProjectCard from '@components/ProjectCard';
import BackToTopButton from '@components/BackToTopButton';
import ViewProject from '@components/ViewProject';

export default function Projects() {
  const backToTopOptions = { root: null, threshold: 0.1 };
  const [header, isVisibleHeader] = useIntersect<HTMLDivElement>(backToTopOptions, true);

  return (
    <>
      <Head>
        <title>Eri Lambe - Aura Case Study</title>
        <meta property="og:title" content="Eri Lambe - Aura Case Study" />
        <meta name="twitter:title" content="Eri Lambe - Aura Case Study" />
      </Head>
      <div ref={header}>
        <HelloBanner
          webp="/assets/banners/aura-banner.webp"
          jpg="/assets/banners/aura-banner.jpg"
          alt="iPhone with Aura"
        />
      </div>
      <PageLayout>
        <div className={styles.mobileScrollFix}>
          <section>
            <TitleCard
              h1Text="Aura"
              overviewText="Using competitor research and information gathered from interviews with potential users, I created a mood-tracking app from start to finish, allowing users to track their moods multiple times a day, record ideas in scrapbooks, and customize the app to their own tastes. By presenting the product to a group of other designers, I was able to pinpoint users' pain points and make the app more tailored to their needs."
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
                    link={item.link ?? null}
                  />
                </section>
              </div>
            ))}
          </div>
          <section>
            <ViewProject
              href="https://sketch.com/s/146a106b-61db-4efd-88cb-ccd7350f11a3/a/Vr3dbKr/play"
              ctaText="View Prototype"
              header="Final Product"
              body="Lastly, I added the final versions of the app and the branding to create a minimalist, relaxing design that was easy for the user to navigate and interact with. With the addition of a store, washi tape, fonts, and images, the overall journaling aspect of the app was enhanced."
            />
          </section>
        </div>
        <BackToTopButton isVisible={!isVisibleHeader} />
      </PageLayout>
      <Footer
        hrefLeft="/hov"
        leftLabel="HoV"
        hrefRight="/nintendo"
        rightLabel="Nintendo"
      />
    </>
  );
}
