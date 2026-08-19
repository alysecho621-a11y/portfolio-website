'use client';

import { useEffect, useRef, useState } from 'react';
import { RESUME_URL } from './HomeNav';
import styles from './ContactSection.module.css';

const CONTACT_EMAIL = 'alysecho621@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/alysecho';

const CONTACT_HEADLINES = [
  "Let's have coffee?",
  "Let's talk!",
  'Thank you for stopping by!',
  'Thank you for being here.',
];

export default function ContactSection() {
  const [headline, setHeadline] = useState(CONTACT_HEADLINES[0]);
  const [headlineOpacity, setHeadlineOpacity] = useState(1);
  const headlineRef = useRef(headline);
  headlineRef.current = headline;

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineOpacity(0);
      setTimeout(() => {
        const options = CONTACT_HEADLINES.filter((h) => h !== headlineRef.current);
        setHeadline(options[Math.floor(Math.random() * options.length)]);
        setHeadlineOpacity(1);
      }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.headline} style={{ opacity: headlineOpacity }}>
        {headline}
      </h2>

      <p className={styles.intro}>
        Have a project, internship, or just want to talk design? I&rsquo;d love to hear from you.
      </p>
      <a href={`mailto:${CONTACT_EMAIL}`} className={styles.smallLink}>
        Email
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={styles.smallLink}>
        LinkedIn
      </a>

      <div className={styles.linksRow}>
        <a href="#top" className={styles.footerLink}>
          Home
        </a>
        <a href="#work" className={styles.footerLink}>
          Work
        </a>
        <a href="/about" className={styles.footerLink}>
          About
        </a>
        <a href={RESUME_URL} target="_blank" rel="noreferrer" className={styles.footerLink}>
          Resume
        </a>
      </div>
    </section>
  );
}
