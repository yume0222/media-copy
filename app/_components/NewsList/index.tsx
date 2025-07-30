import { News } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <ul className={styles.list}>
        {news.map((article) => (
          <li key={article.id}>
            <Link href={`/news/${article.id}`}>
              <div className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </div>
              <Image
                className={styles.image}
                src="/thumbnail.png"
                alt=""
                width="1200"
                height="630"
              />
              <h2 className={styles.title}>{article.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
