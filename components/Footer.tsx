import styles from './Footer.module.css';

export default function Footer({
  links,
}: {
  links?: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>© 2026 Alyse Cho. Designed &amp; built with care.</span>
      {links && links.length > 0 && (
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className={styles.link}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </footer>
  );
}
