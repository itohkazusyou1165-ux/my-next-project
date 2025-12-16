import NewsList from "@/app/_components/NewsList/NewsList";
import { getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination/Pagination";
import { totalmem } from "os";

type Props = {
  params: {
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
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }
  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
