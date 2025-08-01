import { getArticleList, getCategoryDetail } from "@/app/_libs/microcms";
import { TOP_ARTICLE_LIMIT, ARTICLE_LIMIT } from "@/app/_constants";
import ArticleList from "@/app/_components/ArticleList";
import stylesArticleList from "@/app/_components/ArticleList/index.module.css";
import Cta from "@/app/_components/Cta";
import Sheet from "@/app/_components/Sheet";
import stylesSheet from "@/app/_components/Sheet/index.module.css";
import { notFound } from "next/navigation";
import Pagination from "@/app/_components/Pagination";
import KeyVisual from "@/app/_components/KeyVisual";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: article, totalCount } = await getArticleList({
    filters: `category[equals]${category.id}`,
    limit: ARTICLE_LIMIT,
    offset: ARTICLE_LIMIT * (current - 1),
  });
  if (article.length === 0) {
    notFound();
  }

  return (
    <>
      <KeyVisual category={category} />
      <Sheet className={stylesSheet.container}>
        <ArticleList article={article} className={stylesArticleList.grid} />
        <Pagination
          totalCount={totalCount}
          current={current}
          basePath={`/article/category/${category.id}`}
        />
      </Sheet>
      <Cta />
    </>
  );
}
