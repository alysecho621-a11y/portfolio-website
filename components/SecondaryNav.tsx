import styles from './SecondaryNav.module.css';

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  accent?: boolean;
};

export default function SecondaryNav({ links }: { links: NavLink[] }) {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        ← Alyse Cho
      </a>
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className={link.accent ? styles.accentLink : styles.link}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export type { NavLink };
