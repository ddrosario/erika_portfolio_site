import React from 'react';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';

import styles from '@styles/Home.module.scss';
import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import { ProjectType } from 'data/projectData';

import ProjectOverview from '@components/caseStudies/ProjectOverview';
import TitleCard from '@components/caseStudies/TitleCard';
import Research from '@components/caseStudies/Research';
import Interviews from '@components/caseStudies/Interviews';
import Roadmap from '@components/caseStudies/Roadmap';
import Persona from '@components/caseStudies/Persona';
import MoodBoard from '@components/caseStudies/MoodBoard';
import Planning from '@components/caseStudies/Planning';
import Wireframes from '@components/caseStudies/Wireframes';
import UIKit from '@components/caseStudies/UIKit';
import FinalProduct from '@components/caseStudies/FinalProduct';
import Sketch from '@components/caseStudies/Sketch';
import UsabilityTesting from '@components/caseStudies/UsabilityTesting';
import LogoAndIcons from '@components/caseStudies/LogoAndIcons';
import Prototyping from '@components/caseStudies/Prototyping';
import Branding from '@components/caseStudies/Branding';
import Responsive from '@components/caseStudies/Responsive';
import ClickTesting from '@components/caseStudies/ClickTesting';
import BoxedLink from '@components/hoc/BoxedLink';

interface ProjectsProps {
  slug: ProjectType;
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
            <Research projectType={slug} />
          </div>
          <div className={styles.card}>
            <Interviews projectType={slug} />
          </div>
          <div className={styles.card}>
            <Roadmap projectType={slug} />
          </div>
          <div className={styles.card}>
            <Persona projectType={slug} />
          </div>
          <div className={styles.card}>
            <MoodBoard projectType={slug} />
          </div>
          <div className={styles.card}>
            <Planning projectType={slug} />
          </div>
          <div className={styles.card}>
            <Sketch projectType={slug} />
          </div>
          <div className={styles.card}>
            <LogoAndIcons projectType={slug} />
          </div>
          <div className={styles.card}>
            <UsabilityTesting projectType={slug} />
          </div>
          <div className={styles.card}>
            <Wireframes projectType={slug} />
          </div>
          <div className={styles.card}>
            <UIKit projectType={slug} />
          </div>
          <div className={styles.card}>
            <FinalProduct projectType={slug} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <BoxedLink href="/projects/carnival" linkText="carnival" />
            <BoxedLink href="/projects/nintendo" linkText="nintendo" />
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
            <Research projectType={slug} />
          </div>
          <div className={styles.card}>
            <Interviews projectType={slug} />
          </div>
          <div className={styles.card}>
            <Roadmap projectType={slug} />
          </div>
          <div className={styles.card}>
            <Persona projectType={slug} />
          </div>
          <div className={styles.card}>
            <Planning projectType={slug} />
          </div>
          <div className={styles.card}>
            <Wireframes projectType={slug} />
          </div>
          <div className={styles.card}>
            <Prototyping projectType={slug} />
          </div>
          <div className={styles.card}>
            <Branding projectType={slug} />
          </div>
          <div className={styles.card}>
            <UIKit projectType={slug} />
          </div>
          <div className={styles.card}>
            <FinalProduct projectType={slug} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <BoxedLink href="/projects/aura" linkText="aura" />
            <BoxedLink href="/projects/carnival" linkText="carnival" />
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
            <Research projectType={slug} />
          </div>
          <div className={styles.card}>
            <Interviews projectType={slug} />
          </div>
          <div className={styles.card}>
            <Roadmap projectType={slug} />
          </div>
          <div className={styles.card}>
            <Persona projectType={slug} />
          </div>
          <div className={styles.card}>
            <Planning projectType={slug} />
          </div>
          <div className={styles.card}>
            <Wireframes projectType={slug} />
          </div>
          <div className={styles.card}>
            <Prototyping projectType={slug} />
          </div>
          <div className={styles.card}>
            <UIKit projectType={slug} />
          </div>
          <div className={styles.card}>
            <MoodBoard projectType={slug} />
          </div>
          <div className={styles.card}>
            <Responsive projectType={slug} />
          </div>
          <div className={styles.card}>
            <ClickTesting projectType={slug} />
          </div>
          <div className={styles.card}>
            <Branding projectType={slug} />
          </div>
          <div className={styles.card}>
            <FinalProduct projectType={slug} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <BoxedLink href="/projects/nintendo" linkText="nintendo" />
            <BoxedLink href="/projects/aura" linkText="aura" />
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
