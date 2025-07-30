import { getArticleList } from '@/app/_libs/microcms';
import { ARTICLE_LIMIT } from '@/app/_constants';
import ArticleList from "../_components/ArticleList";

export default async function Top() {
  const data = await getArticleList({
    limit: ARTICLE_LIMIT,
  });
  return (
    <>
      <ArticleList article={data.contents} />
    </>
  );
}
