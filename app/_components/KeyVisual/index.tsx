import Title from "../Title";
import stylesTitle from "../Title/index.module.css";
import styles from "./index.module.css";
import type { Category } from '@/app/_libs/microcms';

type Props = {
  children?: React.ReactNode;
  category?: Category;
};

export default function KeyVisual({ children, category }: Props) {
  return (
    <div className={styles.keyVisual}>
      <div className={styles.container}>
        {category ? (
          <Title>
            『{category.name}』の記事一覧
          </Title>
        ) : (
          <Title className={stylesTitle.titleCenter}>
            {children}
          </Title>
        )}
      </div>
    </div>
  );
}
