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
import DesignProcessNav, { DesignProcessNavItem } from '@components/caseStudies/DesignProcessNav';

import OneImgExample from '@components/caseStudies/OneImgExample';
import TwoImgExample from '@components/caseStudies/TwoImgExample';
import ThreeImgExample from '@components/caseStudies/ThreeImgExample';
import CaseStudyNavLinks from '@components/CaseStudyNavLinks';

interface ProjectsProps {
  slug: data.ProjectType;
}

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

export default function Projects({ slug }: ProjectsProps) {
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
        <div className="divider" />
        <section id="empathize">
          <h2>Empathize</h2>
        </section>
        <div className="divider" />
        <section id="define">
          <h2>Define</h2>
        </section>
        <div className="divider" />
        <section id="ideate">
          <h2>Ideate</h2>
        </section>
        <div className="divider" />
        <section id="prototype">
          <h2>Prototype</h2>
        </section>
        <div className="divider" />
        <section id="test">
          <h2>Test</h2>
        </section>
        <div className="divider" />
        <section id="implement">
          <h2>Implement</h2>
        </section>
      </PageLayout>
      <Footer />
    </>
  );
}
