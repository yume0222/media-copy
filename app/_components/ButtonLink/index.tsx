import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  href?: string; // あればリンク、なければボタン
  type?: "button" | "submit" | "reset";
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({
  children,
  href,
  type,
  className,
  target,
  rel,
}: Props) {
  const classes = `${styles.button} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
