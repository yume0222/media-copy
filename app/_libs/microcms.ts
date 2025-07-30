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
  subtitle_2: string;
  subtitle2_text: string;
  subheading2_1: string;
  subheading2_1_text: string;
  subheading2_2: string;
  subheading2_2_text: string;
  subtitle_3: string;
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
export const getArticleList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: 'article',
    queries,
  });
  return listData;
};