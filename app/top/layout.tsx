import Cta from "../_components/Cta";
import Date from "../_components/Date";
import Category from "../_components/Category";
import Sheet from "../_components/Sheet";
import stylesSheet from "../_components/Sheet/index.module.css";
import { News } from "../_libs/microcms";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "コーディング基礎から応用までの学習ロードマップ",
      category: {
        name: "JavaScript",
      },
      publishedAt: "7/29",
      createdAt: "7/29",
    },
    {
      id: "2",
      title: "コーディング基礎から応用までの学習ロードマップ2",
      category: {
        name: "JavaScript",
      },
      publishedAt: "7/29",
      createdAt: "7/29",
    },
    {
      id: "3",
      title: "コーディング基礎から応用までの学習ロードマップ3",
      category: {
        name: "JavaScript",
      },
      publishedAt: "7/29",
      createdAt: "7/29",
    },
  ],
};

export default function RootLayout({ children }: Props) {
  const sliceData = data.contents.slice(0, 1);
  return (
    <>
      <div className={styles.top}>
        <div className={styles.container}>
          {sliceData.map((article) => (
            <div key={article.id} className={styles.inner}>
              <Link href={`/news/${article.id}`} className={styles.link}>
                <div className={styles.thumbnail}>
                  <Image src="/thumbnail.png" alt="" width="400" height="569" />
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
