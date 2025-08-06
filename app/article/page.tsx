import { getArticleList } from "@/app/_libs/microcms";
import { TOP_ARTICLE_LIMIT, ARTICLE_LIST_LIMIT } from "@/app/_constants";
import ArticleList from "../_components/ArticleList";
import stylesArticleList from "../_components/ArticleList/index.module.css";
import Cta from "../_components/Cta";
import Sheet from "../_components/Sheet";
import stylesSheet from "../_components/Sheet/index.module.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Date from "../_components/Date";
import Category from "../_components/Category";
import Pagination from "../_components/Pagination";

export default async function Article() {
  const { contents: topArticle } = await getArticleList({
    limit: TOP_ARTICLE_LIMIT,
  });
  const { contents: article, totalCount } = await getArticleList({
    limit: ARTICLE_LIST_LIMIT,
  });
  
  return (
    <>
      <div className={styles.top}>
        <div className={styles.container}>
          {topArticle.map((article) => (
            <div key={article.id} className={styles.inner}>
              <Link href={`/article/${article.id}`} className={styles.link}>
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
                    <Date date={article.publishedAt ?? article.createdAt} />
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
      <Sheet className={stylesSheet.container}>
        <ArticleList article={article} className={stylesArticleList.grid} />
        <Pagination totalCount={totalCount} />
      </Sheet>
      <Cta />
    </>
  );
}
