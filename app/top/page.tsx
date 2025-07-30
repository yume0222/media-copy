import { News } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";

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

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <NewsList news={sliceData} />
    </>
  );
}
