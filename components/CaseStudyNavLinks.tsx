import React from 'react';

import CaseStudyLinkCard from '@components/CaseStudyLinkCard';

import styles from '@styles/CaseStudyNavLinks.module.scss';

const CaseStudyNavLinks = () => (
  <div className={styles.grid}>
    <CaseStudyLinkCard
      title="Heart of the Valley"
      webp="/assets/nav_links/hov-mobile.webp"
      jpg="/assets/nav_links/hov-mobile.jpg"
      href="/hov"
      bodyText=" This project seeks to provide an easy way for locals and tourists to find art in San Jose, Ca. through Code for America."
    >
      <strong>Ongoing…</strong>
    </CaseStudyLinkCard>
    <CaseStudyLinkCard
      title="Aura"
      webp="/assets/nav_links/aura-mobile.webp"
      jpg="/assets/nav_links/aura-mobile.jpg"
      href="/aura"
      bodyText="A mood-tracking app designed to allow the user to track their mood anytime, even multiple times a day."
    />
    <CaseStudyLinkCard
      title="Nintendo eShop"
      webp="/assets/nav_links/nintendo-mobile.webp"
      jpg="/assets/nav_links/nintendo-mobile.jpg"
      href="/nintendo"
      bodyText="An added feature to the Nintendo eShop on the Switch gaming console allows users to create wishlists and purchase games for friends virtually through the eShop."
    />
    <CaseStudyLinkCard
      title="Carnival Cruiseline"
      webp="/assets/nav_links/carnival-mobile.webp"
      jpg="/assets/nav_links/carnival-mobile.jpg"
      href="/carnival"
      bodyText="An entirely redesigned, responsive site for booking Carnival Cruises, making the process easier and less stressful."
    />
  </div>
);

export default CaseStudyNavLinks;
