import styles from './ProjectCursor.module.css';

export default function ProjectCursor({
  visible,
  x,
  y,
  label,
}: {
  visible: boolean;
  x: number;
  y: number;
  label: string;
}) {
  return (
    <div
      className={styles.cursor}
      style={{
        left: x,
        top: y,
        opacity: visible ? 1 : 0,
        transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.5})`,
      }}
    >
      {label}
    </div>
  );
}
