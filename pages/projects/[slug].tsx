/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';

import styles from '@styles/Home.module.scss';
import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import * as data from 'data/caseStudyData';

import ProjectOverview from '@components/caseStudies/ProjectOverview';
import TitleCard from '@components/caseStudies/TitleCard';

import OneImgExample from '@components/caseStudies/OneImgExample';
import TwoImgExample from '@components/caseStudies/TwoImgExample';
import ThreeImgExample from '@components/caseStudies/ThreeImgExample';
import CaseStudyNavLinks from '@components/CaseStudyNavLinks';

interface ProjectsProps {
  slug: data.ProjectType;
}

export default function Projects({ slug }: ProjectsProps) {
  if (slug === 'aura') {
    return (
      <>
        <Head>
          <title>
            Eri Lambe - Aura Case Study
          </title>
          <meta property="og:title" content="Eri Lambe - Aura Case Study" />
          <meta name="twitter:title" content="Eri Lambe - Aura Case Study" />
        </Head>

        <PageLayout>
          <div className={styles.card}>
            <TitleCard projectType={slug}>
              <div className={styles.titleCats}>
                <img
                  src="/assets/projects/aura/cats/cat1.svg"
                  alt="aura - happy cat"
                />
                <img
                  src="/assets/projects/aura/cats/cat2.svg"
                  alt="sunny - happy orange cat"
                />
                <img
                  src="/assets/projects/aura/cats/cat3.svg"
                  alt="pinky - pink happy cat"
                />
                <img
                  src="/assets/projects/aura/cats/cat4.svg"
                  alt="brown neutral cat"
                />
                <img
                  src="/assets/projects/aura/cats/cat5.svg"
                  alt="gloomy - sad dark cat"
                />
                <img
                  src="/assets/projects/aura/cats/cat6.svg"
                  alt="angry dark cat"
                />
              </div>
            </TitleCard>
          </div>
          <div className={styles.card}>
            <ProjectOverview projectType={slug} />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.research.aura}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.interview.aura}
            />
          </div>
          <div className={styles.card}>
            <TwoImgExample
              {...data.roadmap.aura}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.persona.aura}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.moodBoard.aura}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.planning.aura}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.sketch.aura}
            />
          </div>
          <div className={styles.card}>
            <TwoImgExample
              {...data.logoAndIcons.aura}
            />
          </div>
          <div className={styles.card}>
            <TwoImgExample
              {...data.usabilityTesting.aura}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.wireframes.aura}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.uiKit.aura}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.finalProduct.aura}
            />
          </div>
          <div className={styles.caseStudyNav} />
        </PageLayout>
        <Footer />
      </>
    );
  }
  if (slug === 'nintendo') {
    return (
      <>
        <Head>
          <title>
            Eri Lambe - Nintendo Case Study
          </title>
          <meta property="og:title" content="Eri Lambe - Nintendo Case Study" />
          <meta name="twitter:title" content="Eri Lambe - Nintendo Case Study" />
        </Head>

        <PageLayout>
          <div className={styles.card}>
            <TitleCard projectType={slug} />
          </div>
          <div className={styles.card}>
            <ProjectOverview projectType={slug} />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.research.nintendo}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.interview.nintendo}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.roadmap.nintendo}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.persona.nintendo}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.planning.nintendo}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.wireframes.nintendo}
            />
          </div>
          <div className={styles.card}>
            <TwoImgExample
              {...data.prototyping.nintendo}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.branding.nintendo}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.uiKit.nintendo}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.finalProduct.nintendo}
            />
          </div>
          <div className={styles.caseStudyNav} />
        </PageLayout>
        <Footer />
      </>
    );
  }
  if (slug === 'carnival') {
    return (
      <>
        <Head>
          <title>
            Eri Lambe - Carnival Case Study
          </title>
          <meta property="og:title" content="Eri Lambe - Carnival Case Study" />
          <meta name="twitter:title" content="Eri Lambe - Carnival Case Study" />
        </Head>

        <PageLayout>
          <div className={styles.card}>
            <TitleCard projectType={slug} />
          </div>
          <div className={styles.card}>
            <ProjectOverview projectType={slug} />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.research.carnival}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.interview.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.roadmap.carnival}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.persona.carnival}
            />
          </div>
          <div className={styles.card}>
            <ThreeImgExample
              {...data.planning.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.wireframes.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.prototyping.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.uiKit.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.moodBoard.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.responsive.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.clickTesting.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.branding.carnival}
            />
          </div>
          <div className={styles.card}>
            <OneImgExample
              {...data.finalProduct.carnival}
            />
          </div>
          <div className={styles.caseStudyNav} />
        </PageLayout>
        <Footer />
      </>
    );
  }

  return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params = {} } = context;
  const { slug } = params;
  if (slug === 'aura' || slug === 'nintendo' || slug === 'carnival') {
    return {
      props: {
        slug: params.slug,
      },
    };
  }
  return {
    redirect: {
      destination: '/projects/aura',
    },
  };
}
