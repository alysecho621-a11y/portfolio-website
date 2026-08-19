'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './IntroOverlay.module.css';

const INTRO_TEXT = 'alysecho.design';
const TYPE_SPEED = 65;
const TYPE_DURATION = INTRO_TEXT.length * TYPE_SPEED;
const MORPH_DELAY = TYPE_DURATION + 450;
const EXIT_DELAY = MORPH_DELAY + 800;
const DONE_DELAY = EXIT_DELAY + 600;

const SEEN_KEY = 'alyse-intro-seen';

type Phase = 'idle' | 'search' | 'morph' | 'exit' | 'done';

export type IntroOverlayHandle = {
  replay: () => void;
};

const IntroOverlay = forwardRef<IntroOverlayHandle, { onFirstFinish: () => void }>(
  function IntroOverlay({ onFirstFinish }, ref) {
    const [phase, setPhase] = useState<Phase>('idle');
    const [typedLen, setTypedLen] = useState(0);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
    const typeInterval = useRef<ReturnType<typeof setInterval>>();
    const hasFinishedOnce = useRef(false);

    const clearTimers = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      clearInterval(typeInterval.current);
    };

    const startTyping = () => {
      clearInterval(typeInterval.current);
      setTypedLen(0);
      typeInterval.current = setInterval(() => {
        setTypedLen((len) => {
          const next = len + 1;
          if (next >= INTRO_TEXT.length) clearInterval(typeInterval.current);
          return Math.min(next, INTRO_TEXT.length);
        });
      }, TYPE_SPEED);
    };

    const run = () => {
      clearTimers();
      setPhase('search');
      startTyping();
      timers.current.push(setTimeout(() => setPhase('morph'), MORPH_DELAY));
      timers.current.push(setTimeout(() => setPhase('exit'), EXIT_DELAY));
      timers.current.push(
        setTimeout(() => {
          setPhase('done');
          if (!hasFinishedOnce.current) {
            hasFinishedOnce.current = true;
            sessionStorage.setItem(SEEN_KEY, '1');
            onFirstFinish();
          }
        }, DONE_DELAY)
      );
    };

    useEffect(() => {
      const seen = sessionStorage.getItem(SEEN_KEY);
      if (!seen) {
        run();
      } else {
        hasFinishedOnce.current = true;
        setPhase('done');
        timers.current.push(setTimeout(onFirstFinish, 60));
      }
      return clearTimers;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => ({
      replay: () => run(),
    }));

    const skip = () => {
      clearTimers();
      setPhase('done');
      if (!hasFinishedOnce.current) {
        hasFinishedOnce.current = true;
        sessionStorage.setItem(SEEN_KEY, '1');
        onFirstFinish();
      }
    };

    if (phase === 'done' || phase === 'idle') return null;

    const morphing = phase === 'morph' || phase === 'exit';

    return (
      <div
        onClick={skip}
        className={styles.overlay}
        style={{
          opacity: phase === 'exit' ? 0 : 1,
          pointerEvents: phase === 'exit' ? 'none' : 'auto',
        }}
      >
        <div className={styles.layer} style={{ opacity: morphing ? 0 : 1, transform: `scale(${morphing ? 0.92 : 1})` }}>
          <div className={styles.searchBar}>
            <span className={styles.searchDot}>
              <span className={styles.searchHandle} />
            </span>
            <span className={styles.searchText}>
              {INTRO_TEXT.slice(0, typedLen)}
              <span className={styles.caret} />
            </span>
          </div>
        </div>
        <div className={styles.layer} style={{ opacity: morphing ? 1 : 0, transform: `scale(${morphing ? 1 : 1.08})` }}>
          <span className={styles.wordmark}>Alyse Cho</span>
        </div>
      </div>
    );
  }
);

export default IntroOverlay;
