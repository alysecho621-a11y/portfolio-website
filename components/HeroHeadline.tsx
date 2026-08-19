import { Fragment } from 'react';
import styles from './HeroHeadline.module.css';

const WORDS = [
  'A',
  'Product',
  'Designer',
  'building',
  'digital',
  'tools',
  'and',
  'products',
  'that',
  'focus',
  'on',
  'visual',
  'craft',
  'and',
  'prototyping,',
  'turning',
  'everyday',
  'interactions',
  'into',
];

const ACCENT_WORDS = ['meaningful', 'experiences'];

const VARIANTS = [styles.v0, styles.v1, styles.v2, styles.v3];

export default function HeroHeadline() {
  return (
    <h1 className={styles.headline}>
      {WORDS.map((word, i) => (
        <Fragment key={i}>
          <span className={`${styles.word} ${VARIANTS[i % 4]}`}>{word}</span>{' '}
        </Fragment>
      ))}
      <span className={`${styles.word} ${styles.accent} ${styles.accentA}`}>
        {ACCENT_WORDS[0]}
      </span>{' '}
      <span className={`${styles.word} ${styles.accent} ${styles.accentB}`}>
        {ACCENT_WORDS[1]}
      </span>
    </h1>
  );
}
