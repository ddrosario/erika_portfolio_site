import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import BorderedCard from '@components/hoc/BorderedCard';
import PageLayout from '@components/PageLayout';
import Footer from '@components/Footer';

import profileImg from '@assets/profile-img.jpeg';

import styles from '@styles/About.module.scss';

const journeyMsg = [
  'My name is Erika Lambe and I, until recently, was a full-time student who also worked full-time at Starbucks as a Barista/ Barista Trainer. During this time, I was able to hone my communication skills as well as other skills such as patience, empathy, organization, and improve my method of completing tasks.',
  'Working for such a busy company takes a lot of ability to stay calm during stressful situations and understanding your limits. It helped me understand how to be in tune with myself and know when I need to ask for help and feedback from my peers. Going to school full-time on the side also helped me stay organized and taught me how to do a deep dive on subjects that I didn’t understand, continuously searching for new knowledge and new ideas.',
  'I love when things are continuously changing and are kept new through new research or new understandings. I love to learn new things and find myself growing bored when things get too monotonous, the main reason why I was so interested in design in the first place.',
];

export default function About() {
  return (
    <>
      <Head>
        <title>Eri Lambe</title>
      </Head>
      <PageLayout>
        <main className={styles.main}>
          <BorderedCard>
            <div>
              <h1 className={styles.h1}>
                It&apos;s nice to meet you!
              </h1>
            </div>
          </BorderedCard>
          <div className={styles.profileContainer}>
            <div className={styles.profileImg}>
              <Image
                layout="responsive"
                src={profileImg}
                alt="Erika smiling"
              />
            </div>
          </div>
          <article className={styles.article}>
            <h3>My Journey</h3>
            {journeyMsg.map((paragraph: string) => (
              <React.Fragment key={paragraph}>
                <p>
                  <span>&emsp;&emsp;&emsp;&emsp;</span>
                  {paragraph}
                </p>
                <br />
              </React.Fragment>
            ))}
          </article>
        </main>
      </PageLayout>
      <Footer />
    </>
  );
}
