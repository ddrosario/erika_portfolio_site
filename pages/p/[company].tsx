import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '@styles/Projects2.module.scss';
import pageStyles from '@styles/CompanyPage.module.scss';

import PageLayout from '@components/PageLayout';
import HelloBanner from '@components/banners/HelloBanner';
import CompanyTitleCard from '@components/company/CompanyTitleCard';
import CompanyCard from '@components/company/CompanyCard';
import Footer from '@components/Footer';
import BackToTopButton from '@components/BackToTopButton';
import CaseStudyInfoCard from '@components/CaseStudyInfoCard';

import { companies } from 'data/company';

import useIntersect from '@util/hooks/useIntersection';

interface HomeProps {
  companyTitle: string;
  blurb: string;
}

export default function Home({ companyTitle, blurb }: HomeProps) {
  const options = { root: null, threshold: 0.1, triggerOnce: true };
  const backToTopOptions = { root: null, threshold: 0.1 };
  const [header, isVisibleHeader] = useIntersect<HTMLDivElement>(backToTopOptions, true);
  const [yourProject, isVisible4] = useIntersect<HTMLDivElement>(options);

  return (
    <>
      <Head>
        <title>{`Eri Lambe - ${companyTitle}`}</title>
        <meta property="og:title" content={`Eri Lambe - ${companyTitle}`} />
        <meta name="twitter:title" content={`Eri Lambe - ${companyTitle}}`} />
      </Head>
      <div ref={header}>
        <HelloBanner
          webp="/assets/banners/company-banner.webp"
          jpg="/assets/banners/company-banner.jpg"
          alt="iPhone with Aura"
        />
      </div>
      <PageLayout>
        <div className={styles.mobileScrollFix}>
          <section>
            <div className={styles.myWork}>
              <h2 className={pageStyles.h2}>Hello!</h2>
            </div>
            <div className={`${isVisible4 ? styles.inView : styles.notInView}`}>
              <div className={styles.ctaCard} ref={yourProject}>
                <CompanyTitleCard titleText={`Why ${companyTitle}?`} overviewText={blurb} />
              </div>
            </div>
          </section>
          <div className="contrast">
            <section>
              <CompanyCard
                title="My Work"
                body={`Below are some of the projects I have worked on recently, and the roles I filled as a result of those projects, that pertain to the position I am applying for at ${companyTitle}.`}
              >
                <div className={pageStyles.caseStudyGrid}>
                  <div>
                    <CaseStudyInfoCard
                      title="Nintendo"
                      webp="/assets/nav_links/nintendo-mobile.webp"
                      jpg="/assets/nav_links/nintendo-mobile.jpg"
                      bodyText="I added a highly requested social feature to the Nintendo eShop on the Switch gaming console."
                    >
                      <div className={pageStyles.roleTitle}>
                        Product Designer
                      </div>
                    </CaseStudyInfoCard>
                  </div>
                  <div>
                    <CaseStudyInfoCard
                      title="Carnival Cruise"
                      webp="/assets/nav_links/carnival-mobile.webp"
                      jpg="/assets/nav_links/carnival-mobile.jpg"
                      bodyText="In my redesign of the Carnival Cruise website, I improved accessibility in order to increase revenue."
                    >
                      <div className={pageStyles.roleTitle}>
                        Product Designer
                      </div>
                    </CaseStudyInfoCard>
                  </div>
                </div>
              </CompanyCard>
            </section>
          </div>
          <div className="standard">
            <section>
              <CompanyCard
                title="Why Hire Me?"
                body={`As a product designer for multiple projects, I believe that I would be a great addition to the ${companyTitle} design team. As a creative, open-minded individual, I am willing to learn and can add value to the company.`}
              />
            </section>
          </div>
          <div className="contrast">
            <section>
              <CompanyCard
                title="About Me"
                body="I am a Product Designer based in San Jose, California. In my spare time, I enjoy reading, writing, and playing videogames. A fun fact about me is that the Gamecube was my first game system that I bought with my own money as a child- thus beginning my collection of games and systems!"
              />
            </section>
          </div>
        </div>
        <div className={pageStyles.companyThankYouContainer}>
          <h2 className={pageStyles.companyThankYou}>Thank you for your time!</h2>
        </div>
        <BackToTopButton isVisible={!isVisibleHeader} />
      </PageLayout>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { company } = context.query;
  let companyTitle = 'docusign';
  let { blurb } = companies.docusign;
  if (typeof company === 'string' && Object.keys(companies).includes(company)) {
    companyTitle = companies[company].title;
    blurb = companies[company].blurb;
  }
  return {
    props: { companyTitle, blurb },
  };
}
