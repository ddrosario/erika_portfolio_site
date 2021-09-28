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
          <div className={styles.caseStudyNav}>
            <CaseStudyNavLinks href="/projects/carnival" linkText="< carnival" />
            <CaseStudyNavLinks href="/projects/nintendo" linkText="nintendo >" />
          </div>
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
          <div className={styles.caseStudyNav}>
            <CaseStudyNavLinks href="/projects/aura" linkText="< aura" />
            <CaseStudyNavLinks href="/projects/carnival" linkText="carnival >" />
          </div>
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
          <div className={styles.caseStudyNav}>
            <CaseStudyNavLinks href="/projects/nintendo" linkText="< nintendo" />
            <CaseStudyNavLinks href="/projects/aura" linkText="aura >" />
          </div>
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
