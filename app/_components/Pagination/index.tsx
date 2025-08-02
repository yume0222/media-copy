import { ARTICLE_LIST_LIMIT } from "@/app/_constants";
import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/article",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / ARTICLE_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className={styles.list}>
        {pages.map((p) => (
          <li key={p}>
            {current !== p ? (
              <Link href={`/${basePath}/p/${p}`} className={styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
