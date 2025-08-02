import type { Metadata } from 'next';
import { notFound } from "next/navigation";
import Article from "@/app/_components/Article";
import Sheet from "@/app/_components/Sheet";
import stylesSheet from "@/app/_components/Sheet/index.module.css";
import { getArticleDetail, getArticleList } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";
import ArticleList from "@/app/_components/ArticleList";
import Cta from "@/app/_components/Cta";

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ''],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getArticleDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  const { contents: recommend } = await getArticleList({
    filters: `category[equals]${data.category.id}`,
  });

  return (
    <>
      <Sheet className={stylesSheet.containerSmall}>
        <Article data={data} />
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/banner.png"
            alt=""
            className={styles.banner}
            width="1520"
            height="338"
          />
        </a>
        <div className={styles.recommend}>
          <h2 className={styles.title}>おすすめ記事</h2>
          <div className={styles.article}>
            <ArticleList article={recommend} />
          </div>
        </div>
      </Sheet>
      <Cta />
    </>
  );
}
