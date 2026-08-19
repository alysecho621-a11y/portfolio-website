'use client';

import { useState } from 'react';
import styles from './HomeNav.module.css';

const RESUME_URL =
  'https://drive.google.com/file/d/1c5QPvV_1axU1oct-uqpTIAOFBYlma1Na/view?usp=sharing';

export default function HomeNav({ onLogoClick }: { onLogoClick: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onLogoClick();
  };

  return (
    <>
      <nav className={styles.nav}>
        <a href="#top" onClick={handleLogoClick} className={styles.logo}>
          Alyse Cho
        </a>
        <div className={styles.desktopLinks}>
          <a href="#work" className={styles.link}>
            Work
          </a>
          <a href="/about" className={styles.link}>
            About
          </a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className={styles.link}>
            Résumé
          </a>
        </div>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          className={styles.menuButton}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </nav>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#work" onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
            Work
          </a>
          <a href="/about" onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
            Contact
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.mobileResume}
          >
            Résumé
          </a>
        </div>
      )}
    </>
  );
}

export { RESUME_URL };
