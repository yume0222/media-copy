import { Category } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  category: Category;
  className?: string;
};

export default function Category({ category, className }: Props) {
  return (
    <span className={`${styles.tag} ${className || ""}`}>{category.name}</span>
  );
}
