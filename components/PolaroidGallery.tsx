'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './PolaroidGallery.module.css';

type Polaroid = {
  src: string;
  caption: string;
  fit: 'cover' | 'contain';
};

const ROW_1: Polaroid[] = [
  { src: '/images/birthday-twin.jpeg', caption: '21 on the 21st with my twin! 🩷', fit: 'cover' },
  {
    src: '/images/hiking-twain-harte.jpeg',
    caption: 'hiking at Twain Harte w/design friends! ',
    fit: 'cover',
  },
  {
    src: '/images/di-fellowship-night.jpg',
    caption: 'Davis Design Interactive Fellowship Presentation Night Spring 2026!',
    fit: 'cover',
  },
  { src: '/images/lawntopia.jpg', caption: 'lawntopia! (a.k.a domgrentopia)', fit: 'cover' },
  { src: '/images/jam-sessions.jpeg', caption: 'jam sessions!', fit: 'cover' },
];

const ROW_2: Polaroid[] = [
  {
    src: '/images/downtown-davis.jpeg',
    caption: 'downtown davis with my favorite gals ;)',
    fit: 'contain',
  },
  { src: '/images/di-cohort.jpeg', caption: 'DI Cohort 🏆 #teamdicircle', fit: 'contain' },
  { src: '/images/pumpkin-patch.jpeg', caption: 'pumpkin patch!', fit: 'contain' },
  {
    src: '/images/djo-concert.jpeg',
    caption: 'djo at the Greek Theatre 🍎🪱🌟',
    fit: 'contain',
  },
  { src: '/images/baby-photo.jpeg', caption: 'baby me! ', fit: 'cover' },
];

const CARD_ROTATE = [-4, 3, -4, 3, -2];
const CARD_TRANSLATE_Y = [0, 22, 0, 22, 0];
const PIN_ROTATE = [-2, 3, -3, 2, -2];

function PolaroidRow({ photos, revealed }: { photos: Polaroid[]; revealed: boolean }) {
  return (
    <div className={styles.rowWrap}>
      <div className={styles.string} />
      <div className={styles.row}>
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={styles.cardOuter}
            style={{
              opacity: revealed ? 1 : 0,
              transform: `translateX(${revealed ? 0 : -48}px)`,
              transitionDelay: `${i * 90}ms`,
            }}
          >
            <div className={styles.pin} style={{ transform: `translateX(-50%) rotate(${PIN_ROTATE[i]}deg)` }} />
            <div
              className={styles.card}
              style={{
                transform: `rotate(${CARD_ROTATE[i]}deg) translateY(${CARD_TRANSLATE_Y[i]}px)`,
              }}
            >
              <div className={styles.imageBox}>
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="184px"
                  style={{ objectFit: photo.fit }}
                />
              </div>
              <p className={styles.caption}>{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PolaroidGallery() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.stack}>
        <PolaroidRow photos={ROW_1} revealed={revealed} />
        <svg
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          className={styles.connector}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="960" y1="0" x2="40" y2="60" stroke="#8a8378" strokeWidth="2" />
        </svg>
        <PolaroidRow photos={ROW_2} revealed={revealed} />
      </div>
    </section>
  );
}
