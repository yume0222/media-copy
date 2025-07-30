import type { Category } from '@/app/_libs/microcms';
import styles from "./index.module.css";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  // category.name によってクラスを切り替え
  let className = styles.tag; // 共通クラス
  switch (category.name) {
    case "HTML/CSS":
      className += ` ${styles.tagHtmlCss}`;
      break;
    case "web制作":
      className += ` ${styles.tagWebProduction}`;
      break;
    case "WordPress":
      className += ` ${styles.tagWordpress}`;
      break;
    case "webデザイン":
      className += ` ${styles.tagWebDesign}`;
      break;
    case "JavaScript":
      className += ` ${styles.tagJavascript}`;
      break;
  }

  return <span className={className}>{category.name}</span>;
}
