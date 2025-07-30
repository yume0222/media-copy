import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export default function ButtonLink({ children, className, href }: Props) {
  return (
    <a
      href={href}
      className={`${styles.button} ${className || ""}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
