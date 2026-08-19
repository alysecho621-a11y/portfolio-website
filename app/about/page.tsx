import type { Metadata } from 'next';
import SecondaryNav from '@/components/SecondaryNav';
import PortraitCarousel from '@/components/PortraitCarousel';
import FaqAccordion from '@/components/FaqAccordion';
import PolaroidGallery from '@/components/PolaroidGallery';
import Footer from '@/components/Footer';
import { RESUME_URL } from '@/components/HomeNav';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'About — Alyse Cho' };

export default function AboutPage() {
  return (
    <>
      <SecondaryNav
        links={[
          { label: 'Work', href: '/#work' },
          { label: 'About', href: '/about', accent: true },
          { label: 'Résumé', href: RESUME_URL, external: true },
        ]}
      />

      <section className={styles.intro}>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>About</h2>
          <p className={styles.greeting}>Hello! I&rsquo;m Alyse. Nice to meet you ☺️</p>
          <div className={styles.bio}>
            <p>
              Before you read any further: my name is pronounced &ldquo;Alice,&rdquo; not Alyse —
              consider this your first UX correction from me today.
            </p>
            <p>I&rsquo;m a UI/UX and product designer based in Los Angeles.</p>
            <p>
              Funny enough, I actually grew up wanting to be a pediatric nurse — turns out the
              same empathy that made me want to take care of kids is what pulled me toward UX
              design. A different field, but I carry the same instinct. ;)
            </p>
            <p>
              Outside of design, you&rsquo;ll most likely find me exploring new cities with my
              phone camera glued to my hand (yes, that&rsquo;s me mid-photo-op in the picture),
              singing and songwriting, journaling once a week, hunting down new food spots, and
              attending live shows!
            </p>
          </div>
        </div>
        <PortraitCarousel />
      </section>

      <FaqAccordion />

      <section className={styles.memoryLaneSection}>
        <h3 className={styles.memoryLaneHeading}>A trip down memory lane...&nbsp;</h3>
      </section>

      <PolaroidGallery />

      <Footer
        links={[
          { label: 'LinkedIn', href: 'https://linkedin.com/in/alysecho', external: true },
          { label: 'Email', href: 'mailto:hello@alysecho.com' },
        ]}
      />
    </>
  );
}
