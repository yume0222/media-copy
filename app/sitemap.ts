import { MetadataRoute } from 'next';
import { getAllCategoryList, getAllArticleList } from './_libs/microcms';


const buildUrl = (path?: string) => `https://media-copy.vercel.app${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleContents = await getAllArticleList();
  const categoryContents = await getAllCategoryList();

  const articleUrls: MetadataRoute.Sitemap = articleContents.map((content) => ({
    url: buildUrl(`/article/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/article/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/static'),
      lastModified: now,
    },
    {
      url: buildUrl('/contact'),
      lastModified: now,
    },
    {
      url: buildUrl('/article'),
      lastModified: now,
    },
    ...articleUrls,
    ...categoryUrls,
  ];
}