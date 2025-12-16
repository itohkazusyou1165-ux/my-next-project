import NewsList from "@/app/_components/NewsList/NewsList";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination/Pagination";

type Props = {
  params: {
    id: string;
    current: string;
  };
};
// 404ページへ飛ばす
export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  // ここでページ数を設定する

  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }
  return (
    <>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
