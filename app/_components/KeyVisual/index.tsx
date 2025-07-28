import Title from "../Title";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function KeyVisual({ children, className }: Props) {
  return (
    <div className={styles.keyVisual}>
      <div className={styles.container}>
        <Title className={className}>{children}</Title>
      </div>
    </div>
  );
}
