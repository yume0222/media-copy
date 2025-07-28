import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({ children, className }: Props) {
  return <h1 className={`${styles.title} ${className || ""}`}>{children}</h1>;
}
