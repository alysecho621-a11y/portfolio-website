'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PortraitCarousel.module.css';

const ACCENT = '#56b8db';

const SLOTS = [
  { image: '/images/portrait-1.jpg', label: 'Photo 1 of 4' },
  { image: '/images/portrait-2.jpg', label: 'Photo 2 of 4' },
  { image: '/images/portrait-3.jpg', label: 'Photo 3 of 4' },
  { image: '/images/portrait-4.jpg', label: 'Photo 4 of 4' },
];

export default function PortraitCarousel() {
  const [index, setIndex] = useState(0);

  const go = (i: number) => setIndex((i + SLOTS.length) % SLOTS.length);

  return (
    <div
      className={styles.frame}
      style={{ boxShadow: `0 0 60px 0 ${ACCENT}4d` }}
    >
      {SLOTS.map((slot, i) => (
        <div key={i} className={styles.slot} style={{ opacity: i === index ? 1 : 0 }}>
          {slot.image ? (
            <Image
              src={slot.image}
              alt={`Alyse Cho, ${slot.label}`}
              fill
              sizes="388px"
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <div className={styles.placeholder}>{slot.label}</div>
          )}
        </div>
      ))}
      <div
        onClick={() => go(index - 1)}
        className={styles.tapZone}
        style={{ left: 0 }}
        aria-label="Previous photo"
      />
      <div
        onClick={() => go(index + 1)}
        className={styles.tapZone}
        style={{ right: 0 }}
        aria-label="Next photo"
      />
      <div className={styles.dots}>
        {SLOTS.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            aria-label={`Go to photo ${i + 1}`}
            className={styles.dot}
            style={{ background: i === index ? ACCENT : '#d8d2c8' }}
          />
        ))}
      </div>
    </div>
  );
}
