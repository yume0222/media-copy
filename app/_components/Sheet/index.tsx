import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div className={styles.ptb}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
