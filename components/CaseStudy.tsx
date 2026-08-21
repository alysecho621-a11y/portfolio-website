import Image from 'next/image';
import SecondaryNav from './SecondaryNav';
import Footer from './Footer';
import CaseStudySections from './CaseStudySections';
import styles from './CaseStudy.module.css';

type Tag = { label: string; variant: 'teal' | 'orange' | 'outline' };
type MetaItem = { label: string; value: string };
type PlaceholderImage = { ratio: string; label: string };

export type CaseStudyData = {
  title: string;
  tagline: string;
  tags: Tag[];
  meta: MetaItem[];
  coverLabel: string;
  coverImage?: string;
  coverImageAlt?: string;
  sideNav?: boolean;
  taglinePlain?: boolean;
  problem: string;
  process: { text: string; images: PlaceholderImage[] };
  solution: { text: string; images: PlaceholderImage[] };
  outcome: string;
  nextProject: { title: string; href: string };
};

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <>
      <SecondaryNav
        links={[
          { label: 'Work', href: '/#work' },
          { label: 'Contact', href: '/#contact' },
        ]}
      />

      <header className={styles.header}>
        <div className={styles.tags}>
          {data.tags.map((tag) => (
            <span key={tag.label} className={styles[`tag-${tag.variant}`]}>
              {tag.label}
            </span>
          ))}
        </div>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={data.taglinePlain ? styles.taglinePlain : styles.tagline}>{data.tagline}</p>
        <div className={styles.metaGrid}>
          {data.meta.map((item) => (
            <div key={item.label}>
              <span className={styles.metaLabel}>{item.label}</span>
              <span className={styles.metaValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </header>

      <div className={styles.coverWrap}>
        {data.coverImage ? (
          <div className={styles.cover} style={{ position: 'relative' }}>
            <Image
              src={data.coverImage}
              alt={data.coverImageAlt || data.title}
              fill
              sizes="(max-width: 1100px) 90vw, 1100px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ) : (
          <div className={`${styles.cover} placeholder-frame`}>
            <span className="placeholder-label">{data.coverLabel}</span>
          </div>
        )}
      </div>

      {data.sideNav ? (
        <CaseStudySections
          problem={data.problem}
          process={data.process}
          solution={data.solution}
          outcome={data.outcome}
        />
      ) : (
        <>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <p className={styles.sectionText}>{data.problem}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Process</h2>
            <p className={`${styles.sectionText} ${styles.sectionTextSpaced}`}>
              {data.process.text}
            </p>
            <div className={styles.imageGrid}>
              {data.process.images.map((img) => (
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

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Solution</h2>
            <p className={`${styles.sectionText} ${styles.sectionTextSpaced}`}>
              {data.solution.text}
            </p>
            <div className={styles.imageGridNarrow}>
              {data.solution.images.map((img) => (
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

          <section className={`${styles.section} ${styles.sectionLast}`}>
            <h2 className={styles.sectionTitle}>Outcome &amp; Reflection</h2>
            <p className={styles.sectionText}>{data.outcome}</p>
          </section>
        </>
      )}

      <div className={styles.nextWrap}>
        <a href={data.nextProject.href} className={styles.nextCard}>
          <div>
            <span className={styles.nextLabel}>Next Project</span>
            <h3 className={styles.nextTitle}>{data.nextProject.title}</h3>
          </div>
          <span className={styles.nextArrow}>→</span>
        </a>
      </div>

      <Footer
        links={[
          { label: 'LinkedIn', href: 'https://linkedin.com/in/alysecho', external: true },
          { label: 'Email', href: 'mailto:hello@alysecho.com' },
        ]}
      />
    </>
  );
}
