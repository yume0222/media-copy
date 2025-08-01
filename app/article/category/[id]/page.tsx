import ArticleList from "@/app/_components/ArticleList";
import KeyVisual from "@/app/_components/KeyVisual";
import Sheet from "@/app/_components/Sheet";
import stylesSheet from "@/app/_components/Sheet/index.module.css";
import { getCategoryDetail, getArticleList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: article } = await getArticleList({
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <KeyVisual category={category} />
      <Sheet className={stylesSheet.container}>
        <ArticleList article={article} />
      </Sheet>
    </>
  );
}
