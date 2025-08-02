import Image from "next/image";
import type { Article } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <>
      <div className={styles.meta}>
        <Link href={`/article/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.thumbnail}>
        <Image
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      </div>
      <p className={styles.desc}>{data.description}</p>
      <div className={styles.contents}>
        <h2 className={styles.subtitle}>{data.subtitle1}</h2>
        <p className={styles.text}>{data.subtitle1_text}</p>
        <h3 className={styles.subheading}>{data.subheading1_1}</h3>
        <p className={styles.text}>{data.subheading1_1_text}</p>
        <h3 className={styles.subheading}>{data.subheading1_2}</h3>
        <p className={styles.text}>{data.subheading1_2_text}</p>
        <h2 className={styles.subtitle}>{data.subtitle2}</h2>
        <p className={styles.text}>{data.subtitle2_text}</p>
        <h3 className={styles.subheading}>{data.subheading2_1}</h3>
        <p className={styles.text}>{data.subheading2_1_text}</p>
        <h3 className={styles.subheading}>{data.subheading2_2}</h3>
        <p className={styles.text}>{data.subheading2_2_text}</p>
        <h2 className={styles.subtitle}>{data.subtitle3}</h2>
        <p className={styles.text}>{data.subtitle3_text}</p>
      </div>
    </>
  );
}
