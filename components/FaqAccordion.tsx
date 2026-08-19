'use client';

import { useState } from 'react';
import styles from './FaqAccordion.module.css';

const FAQS = [
  {
    q: 'How did you get into design?',
    a: (
      <p>
        The summer before my freshman year at UC Davis, I applied as a biological sciences major
        — but didn&rsquo;t feel confident nor passionate about pursuing a career in the medical
        field. I decided to explore other options and discovered that Davis actually had a strong
        design program. I already had web design experience, where I designed a platform raising
        awareness about anti-AAPI violence. This experience encouraged me to pursue UI/UX design,
        which helped me realize how much I enjoy building products and visual experiences rooted
        in empathy, community impact, and belonging.
      </p>
    ),
  },
  {
    q: 'What is your design philosophy?',
    a: (
      <div className={styles.multiPara}>
        <p>
          Design is just care with better tools. Every screen or experience I design is an
          opportunity to make the user&rsquo;s day easier and better — so I try to design with
          care, stay attentive, and embrace the iterations.
        </p>
        <p>
          I do my best to ask questions, especially the stupid ones. I&rsquo;m still a
          work-in-progress, but I&rsquo;ve learned how asking for feedback and clarification can
          impact the quality of my work.
        </p>
        <p>Treat mistakes as a part of the process. Embrace the failures and grow from them rather than ignoring them.</p>
        <p>
          Lastly, I enjoy embracing every single opportunity to continue growing and shaping
          myself into the best designer I can be.
        </p>
      </div>
    ),
  },
  {
    q: 'Be honest: how many tabs do you have open right now?',
    a: <p>Too many to the point that my laptop overheats and crashes every few hours. Seriously.</p>,
  },
  {
    q: 'Sweet or savory?',
    a: (
      <p>
        I have a major sweet tooth — can you guess my favorite dessert? Here&rsquo;s a hint:
        translates to &ldquo;pick me up&rdquo; in Italian 👩🏻‍🍳
      </p>
    ),
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Frequently Alyse-ed Questions</h3>
      <div className={styles.list}>
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className={styles.item}>
              <div
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={styles.question}
                role="button"
                tabIndex={0}
              >
                <span className={styles.questionText}>{faq.q}</span>
                <span
                  className={styles.icon}
                  style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
                >
                  +
                </span>
              </div>
              <div className={styles.answer} style={{ maxHeight: isOpen ? '600px' : '0px' }}>
                <div className={styles.answerInner}>{faq.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
