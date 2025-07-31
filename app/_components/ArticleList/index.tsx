import { Article } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";

type Props = {
  article: Article[];
  className?: string;
};

export default function ArticleList({ article, className }: Props) {
  if (article.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <ul className={`${styles.list} ${className || ""}`}>
        {article.map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.id}`}>
              <div className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </div>
              <Image
                src={article.thumbnail.url}
                alt=""
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
              <h2 className={styles.title}>{article.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
