'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CaseStudySections.module.css';

type PlaceholderImage = { ratio: string; label: string };

const SECTIONS = [
  { key: 'problem', label: 'The Problem' },
  { key: 'process', label: 'The Process' },
  { key: 'solution', label: 'The Solution' },
  { key: 'outcome', label: 'Outcome' },
] as const;

type SectionKey = (typeof SECTIONS)[number]['key'];

export default function CaseStudySections({
  problem,
  process,
  solution,
  outcome,
}: {
  problem: string;
  process: { text: string; images: PlaceholderImage[] };
  solution: { text: string; images: PlaceholderImage[] };
  outcome: string;
}) {
  const [active, setActive] = useState<SectionKey>('problem');
  const [isMobile, setIsMobile] = useState(false);
  const refs = useRef<Partial<Record<SectionKey, HTMLElement>>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1180);
    onResize();
    window.addEventListener('resize', onResize);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute('data-section-key') as SectionKey);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    Object.values(refs.current).forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener('resize', onResize);
      observerRef.current?.disconnect();
    };
  }, []);

  const setSectionRef = (key: SectionKey) => (el: HTMLElement | null) => {
    if (!el) return;
    refs.current[key] = el;
    observerRef.current?.observe(el);
  };

  const scrollTo = (key: SectionKey) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(`section-${key}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.layout}>
      {!isMobile && (
        <div className={styles.sidebar}>
          {SECTIONS.map(({ key, label }) => {
            const isActive = active === key;
            return (
              <a key={key} href={`#section-${key}`} onClick={scrollTo(key)} className={styles.navLink}>
                <span
                  className={styles.dot}
                  style={{
                    width: isActive ? 11 : 9,
                    height: isActive ? 11 : 9,
                    background: isActive ? 'oklch(45% 0.1 195)' : 'oklch(55% 0.01 80)',
                  }}
                />
                <span
                  className={styles.navLabel}
                  style={{
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'oklch(45% 0.1 195)' : 'oklch(55% 0.01 80)',
                  }}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      )}
      <div className={styles.content}>
        <section id="section-problem" data-section-key="problem" ref={setSectionRef('problem')} className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.sectionText}>{problem}</p>
        </section>

        <section id="section-process" data-section-key="process" ref={setSectionRef('process')} className={styles.section}>
          <h2 className={styles.sectionTitle}>The Process</h2>
          <p className={`${styles.sectionText} ${styles.sectionTextSpaced}`}>{process.text}</p>
          <div className={styles.imageGrid}>
            {process.images.map((img) => (
              <div
                key={img.label}
                className={`${styles.gridImage} placeholder-frame`}
                style={{ aspectRatio: img.ratio }}
              >
                <span className="placeholder-label">{img.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="section-solution" data-section-key="solution" ref={setSectionRef('solution')} className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <p className={`${styles.sectionText} ${styles.sectionTextSpaced}`}>{solution.text}</p>
          <div className={styles.imageGridNarrow}>
            {solution.images.map((img) => (
              <div
                key={img.label}
                className={`${styles.gridImage} placeholder-frame`}
                style={{ aspectRatio: img.ratio }}
              >
                <span className="placeholder-label">{img.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="section-outcome"
          data-section-key="outcome"
          ref={setSectionRef('outcome')}
          className={`${styles.section} ${styles.sectionLast}`}
        >
          <h2 className={styles.sectionTitle}>Outcome &amp; Reflection</h2>
          <p className={styles.sectionText}>{outcome}</p>
        </section>
      </div>
    </div>
  );
}
