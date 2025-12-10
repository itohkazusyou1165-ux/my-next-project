import Image from "next/image";
import styles from "./NewsList.module.css";
import { News } from "@/app/_libs/microcms";
import Date from "../Date/Date";
import Category from "../Category/Category";
import Link from "next/link";

type Props = {
    news:News[];
};


export default function NewsList({news}: Props) {
if (news.length === 0){
    return <p>記事がありません</p>;
}

  return (
      <ul>
        {news.map((article) =>(
          <li key={article.id} className={styles.list}>
            <Link href={`/news/${article.id}`} className={styles.link}>
              <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
              />
              <dl className={styles.content}>
                <dt className={styles.newsItemTitle}>
                  {article.title}
                </dt>
                <dd className={styles.meta}>
                    <Category category={article.category}/>
                    <Date date={article.publishedAt ?? article.createdAt} />
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
  );
}
