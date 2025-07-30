import Cta from "../_components/Cta";
import Date from "../_components/Date";
import Category from "../_components/Category";
import Sheet from "../_components/Sheet";
import stylesSheet from "../_components/Sheet/index.module.css";
import { getArticleList } from "@/app/_libs/microcms";
import { TOP_ARTICLE_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const data = await getArticleList({
    limit: TOP_ARTICLE_LIMIT,
  });
  return (
    <>
      <div className={styles.top}>
        <div className={styles.container}>
          {data.contents.map((article) => (
            <div key={article.id} className={styles.inner}>
              <Link href={`/news/${article.id}`} className={styles.link}>
                <div className={styles.thumbnail}>
                  <Image
                    src={article.thumbnail.url}
                    alt=""
                    className={styles.image}
                    width={article.thumbnail.width}
                    height={article.thumbnail.height}
                  />
                </div>
                <div className={styles.body}>
                  <Category category={article.category} />
                  <h2 className={styles.title}>{article.title}</h2>
                  <p className={styles.date}>
                    . <Date date={article.publishedAt ?? article.createdAt} />
                  </p>
                </div>
              </Link>
              <div className={styles.character}>
                <Image
                  src="/img-kv-character.png"
                  alt=""
                  width="400"
                  height="569"
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.treat}>
          <Image src="/img-kv-treat.png" alt="" width="500" height="172" />
        </div>
      </div>
      <Sheet className={stylesSheet.container}>{children}</Sheet>
      <Cta />
    </>
  );
}
