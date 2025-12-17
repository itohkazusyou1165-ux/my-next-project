import NewsList from "@/app/_components/NewsList/NewsList";
import SearchField from "@/app/_components/SearchField/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";


type Props={
    searchParams:{
        q?:string
    };
};

export default async function Page({searchParams}:Props){
    const { contents: news } = await getNewsList({
        limit:NEWS_LIST_LIMIT,
        q: searchParams.q,
    });

    return(
        <>
        <SearchField/>
        <NewsList news={news} />
        </>
    );
}