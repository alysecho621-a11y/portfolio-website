'use client';

import { useEffect, useRef, useState } from 'react';
import HomeNav from '@/components/HomeNav';
import IntroOverlay, { type IntroOverlayHandle } from '@/components/IntroOverlay';
import HeroHeadline from '@/components/HeroHeadline';
import ProjectCard from '@/components/ProjectCard';
import ProjectCursor from '@/components/ProjectCursor';
import { useProjectCursor } from '@/components/useProjectCursor';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const introRef = useRef<IntroOverlayHandle>(null);
  const cursor = useProjectCursor();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.pageYOffset - 70,
            behavior: 'smooth',
          });
        }
      }, 400);
    }
  }, []);

  return (
    <>
      <IntroOverlay ref={introRef} onFirstFinish={() => setHeroVisible(true)} />

      <HomeNav onLogoClick={() => introRef.current?.replay()} />

      <header
        id="top"
        className={styles.hero}
        style={{
          opacity: heroVisible ? 1 : 0,
          transform: `translateY(${heroVisible ? 0 : 16}px)`,
        }}
      >
        <HeroHeadline />
        <p className={styles.heroSubtext}>
          <span className={styles.heroSubtextInner}>
            4th year Design @ UC Davis&nbsp;
            <br />
            Actively seeking internships and full time in 2027 in Tech and Entertainment
          </span>
        </p>
        <div className={styles.heroActions}>
          <a href="#work" className={styles.cta}>
            View my work
          </a>
        </div>
      </header>

      <ProjectCursor visible={cursor.visible} x={cursor.x} y={cursor.y} label={cursor.label} />

      <section id="work" className={styles.work}>
        <div className={styles.workHeader}>
          <h2 className={styles.workTitle}>
            <i>Featured Works</i>
          </h2>
        </div>
        <div className={styles.workGrid}>
          <ProjectCard
            href="/work/di-circle"
            image="/images/di-circle-cover.png"
            imageAlt="DI Circle desktop homepage mockup"
            tags={[
              { label: 'Web', variant: 'teal' },
              { label: 'Product Design', variant: 'orange' },
              { label: 'Fall 2025', variant: 'outline' },
            ]}
            title="DI Circle"
            description="Reducing the intimidation of professional networking for DI members through a collaborative, community-first platform"
            cursorHandlers={cursor.handlersFor('View Project →')}
          />
          <ProjectCard
            href="/work/goodreads-redesign"
            image="/images/goodreads-cover.png"
            imageAlt="GoodReads Reimagined mockup"
            tags={[
              { label: 'Mobile', variant: 'teal' },
              { label: 'UX / UI', variant: 'orange' },
              { label: 'Spring 2025', variant: 'outline' },
            ]}
            title="GoodReads Reimagined"
            description="A cleaner, more social reading companion — same shelves, better experience. Improving visual clarity, navigation, and social features for GoodRead users."
            cursorHandlers={cursor.handlersFor('View Project →')}
          />
          <ProjectCard
            href="/work/queer-arts-gallery"
            image="/images/queer-arts-cover.png"
            imageAlt="Queer Arts Gallery sign-in mockup"
            tags={[
              { label: 'Branding', variant: 'teal' },
              { label: 'Web', variant: 'orange' },
              { label: 'Winter 2026', variant: 'outline' },
            ]}
            title="Queer Arts Gallery"
            description="Modernizing QAC's website into a vibrant, inclusive digital space that celebrates queer art and grows membership."
            cursorHandlers={cursor.handlersFor('Coming soon!')}
          />
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  );
}
