import Image from 'next/image';
import styles from './ProjectCard.module.css';

type Tag = { label: string; variant: 'teal' | 'orange' | 'outline' | 'badge' };

export default function ProjectCard({
  href,
  image,
  imageAlt,
  tags,
  title,
  description,
  cursorHandlers,
}: {
  href: string;
  image: string;
  imageAlt: string;
  tags: Tag[];
  title: string;
  description: string;
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onMouseMove: (e: React.MouseEvent) => void;
  };
}) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.thumb} {...cursorHandlers}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 760px) 90vw, 33vw"
          className={styles.thumbImage}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag.label} className={styles[`tag-${tag.variant}`]}>
            {tag.label}
          </span>
        ))}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </a>
  );
}
