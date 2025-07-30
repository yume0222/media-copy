import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Sheet({ children, className }: Props) {
  return (
    <div className={styles.ptb}>
      <div className={`${className || ""}`}>{children}</div>
    </div>
  );
}
