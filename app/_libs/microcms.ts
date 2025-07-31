import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Article = {
  title: string;
  description: string;
  thumbnail: MicroCMSImage;
  category: Category;
  subtitle1: string;
  subtitle1_text: string;
  subheading1_1: string;
  subheading1_1_text: string;
  subheading1_2: string;
  subheading1_2_text: string;
  subtitle2: string;
  subtitle2_text: string;
  subheading2_1: string;
  subheading2_1_text: string;
  subheading2_2: string;
  subheading2_2_text: string;
  subtitle3: string;
  subtitle3_text: string;
} & MicroCMSListContent;

// .env.lacalファイルに設定した環境変数を参照
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// クライアントを作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 記事一覧を取得する関数
export const getArticleList = async (queries?: MicroCMSQueries) => { // queriesは、引数。MicroCMSQueriesとは、microCMSに渡すクエリパラメータの型情報
  const listData = await client.getList<Article>({ // getList（非同期通信）は、async/awaitという仕組みで同期的に処理している。<Article>は、取得してきたデータの型
    endpoint: 'article', // endpointには、microCMS側で定義した記事管理APIのエンドポイントを設定
    queries, // queriesには、引数から受け取ったものをそのまま渡している
  });
  return listData;
};

// 記事詳細情報の取得（1つのニュース記事を取得する関数）
export const getArticleDetail = async (
  contentId: string, // 第一引数に、contentIdという文字列
  queries?: MicroCMSQueries // 第二引数に、queries
) => {
  const detailData = await client.getListDetail<Article>({
    endpoint: 'article',
    contentId,
    queries,
  });
  return detailData;
};